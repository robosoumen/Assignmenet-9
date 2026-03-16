

const extraSections = [
  {
    title: "Shop by Adventure",
    desc: "Move beyond 'Plastic' or 'Wooden' labels. Use themed grids like 'Space Explorer' or 'Wildlife Ranger' to help parents shop by a child's interests."
  },
  {
    title: "Top Rated by Tiny Humans",
    desc: "Add wit with 'Kid-Approved' reviews. Include a toy photo, 5 stars, and a funny quote like: 'It flies higher than dad's drone!' — Leo, Age 6."
  },
  {
    title: "Interactive Gift Finder",
    desc: "A 3-step mini-quiz: Age? -> Budget? -> Superpower? (Creativity/Brains). Redirects users to a perfectly filtered galaxy of toys."
  },
  {
    title: "The Toy Box Blog",
    desc: "Establish authority with educational content. Write about fine motor skills or tips for organizing a messy playroom."
  },
  {
    title: "Galaxy Unboxing",
    desc: "A social media style feed showing real kids opening their ToyGalaxy packages. It builds massive trust and excitement."
  }
];

export default function SectionList() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 rounded-xl shadow-2xl border border-indigo-500/30">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us</h2>
      <ol className="space-y-6">
        {extraSections.map((item, index) => (
          <li key={index} className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-sm">
              {index + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold text-indigo-300">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
