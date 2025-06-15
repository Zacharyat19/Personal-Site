const projects = [
  {
    name: 'Personal Site',
    url: 'https://github.com/Zacharyat19/Personal-Site',
    description: 'This very site, built using Next.js and Tailwind CSS.',
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="space-y-4">
        {projects.map((proj) => (
          <li key={proj.name}>
            <a href={proj.url} target="_blank" className="text-blue-600 text-lg font-medium hover:underline">
              {proj.name}
            </a>
            <p className="text-sm text-gray-600">{proj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}