import home from '../../public/assets/projects/time_management/home.png';
import employees from '../../public/assets/projects/time_management/employees.png';
import vacations from '../../public/assets/projects/time_management/vacations.png';
import vacations2 from '../../public/assets/projects/time_management/vacations2.png';
import raports from '../../public/assets/projects/time_management/raports.png';
import raports2 from '../../public/assets/projects/time_management/raports2.png';

export default [
  {
    title: 'Employee Time Management System',
    about: `This is a commercial project that was developed based on client needs and is now
       being used by a warehouse company to manage employee work times, vacations, and attendance 
       in various work environments. The system includes a mobile app for employees and an admin web application for managers.`,
    tech: [
      'React',
      'React Native',
      'MongoDB Realm',
      'MongoDB Serverless Functions',
      'Realm Web',
      'Material UI',
    ],
    links: {
      live: 'https://best-ever-magazyn.netlify.app/',
      github: 'https://github.com/pologora/employee_time_management',
    },
    screenShoots: [home, employees, vacations, vacations2, raports, raports2],
  },
];
