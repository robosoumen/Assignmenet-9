import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleToyDetails from '../components/SingleToyDetails';

const ToyDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    console.log(data, id);

    useEffect(() => {
        const neswDetails = data.find((singleNews) => singleNews.toyId == id);
        setNews(neswDetails);
    }, [data, id]);
    return (
        <div className='space-y-3 bg-amber-200'>
           <header>
                <Navbar></Navbar>
           </header>
           <main>
                <SingleToyDetails news={news}></SingleToyDetails>
           </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ToyDetails;