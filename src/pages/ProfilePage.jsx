import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const ProfilePage = () => {
    const {} = use(AuthContext)
    return (
        <div>
            <h1>This is my profile page</h1>
        </div>
    );
};

export default ProfilePage;