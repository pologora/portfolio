import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import project from '../../../public/assets/projects/time_management/time_web_screen.png';

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

function Project({
  title, about, tech, links, screenShoots,
}) {
  return (
    <article>
      <div className="mb-10">
        <div className="flex justify-between place-items-center gap-10 mb-10 flex-col md:flex-row">
          <h2>{title}</h2>
          <div className="flex gap-10 md:gap-6">
            <FaGithub size={25} />
            <IoMdOpen size={25} />
          </div>
        </div>
        <p>
          This is a commercial project that was developed based on client needs and is now being
          used by a warehouse company to manage employee work times, vacations, and attendance in
          various work environments. The system includes a mobile app for employees and an admin web
          application for managers.
        </p>
        <ul />
      </div>
      <div className="projects relative z-[-10]">
        <div className="">
          <Image src={project} />
        </div>
      </div>
    </article>
  );
}
export default Project;
