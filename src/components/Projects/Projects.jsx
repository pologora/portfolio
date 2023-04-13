/* eslint-disable react/jsx-props-no-spreading */
import Project from './Project';
import projects from '../../data/projects';

// {
//     title: 'Employee Time Management System',
//     about: `This is a commercial project that was developed based on client needs and is now
//        being used by a warehouse company to manage employee work times, vacations, and attendance
//        in various work environments. The system includes a mobile app for employees and an admin web application for managers.`,
//     tech: [
//       'React',
//       'React Native',
//       'MongoDB Realm',
//       'MongoDB Serverless Functions',
//       'Realm Web',
//       'Material UI',
//     ],
//     links: {
//       live: 'https://best-ever-magazyn.netlify.app/',
//       github: 'https://github.com/pologora/employee_time_management',
//     },
//     screenShoots: [home, employees, vacations, vacations2, raports, raports2],
//   },

function Projects() {
  const projectsListElements = projects.map((item) => <Project {...item} />);
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-projects mb-20">My Projects</h2>
        {projectsListElements}
      </div>
    </section>
  );
}
export default Projects;
