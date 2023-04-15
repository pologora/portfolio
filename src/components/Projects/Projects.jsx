/* eslint-disable react/jsx-props-no-spreading */
import Project from './Project';
import projects from '../../data/projects';

function Projects() {
  const projectsListElements = projects.map((item) => <Project key={item.title} {...item} />);
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-projects mb-20">Featured Projects</h2>
        {projectsListElements}
      </div>
    </section>
  );
}
export default Projects;
