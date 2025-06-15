const projects = [
  {
    name: 'Project One',
    description: 'A cool project I made.',
    link: 'https://github.com/Zacharyat19/project-one',
  },
  {
    name: 'Project Two',
    description: 'Another awesome project.',
    link: 'https://github.com/Zacharyat19/project-two',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="prose prose-invert max-w-none">
      <h2>Projects</h2>
      <ul>
        {projects.map(({ name, description, link }) => (
          <li key={name} className="mb-4">
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              {name}
            </a>
            : {description}
          </li>
        ))}
      </ul>
    </section>
  );
}