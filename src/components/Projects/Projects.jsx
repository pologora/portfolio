/* eslint-disable react/jsx-props-no-spreading */
import Project from './Project';
import projects from '../../data/projects';

function Projects() {
  const projectsListElements = projects.map((item) => <Project {...item} />);
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-projects mb-20">My Projects</h2>
        {projectsListElements}
      </div>
    </section>
  );
}
export default Projects;
