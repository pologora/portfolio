import home from '../../public/assets/projects/time_management/home.png';
import employees from '../../public/assets/projects/time_management/employees.png';
import vacations from '../../public/assets/projects/time_management/vacations.png';
import vacations2 from '../../public/assets/projects/time_management/vacations2.png';
import raports from '../../public/assets/projects/time_management/raports.png';
import raports2 from '../../public/assets/projects/time_management/raports2.png';
import androidEnd from '../../public/assets/projects/time_management/android_end.jpg';
import androidGreetingsEnd from '../../public/assets/projects/time_management/android_greetings_end.jpg';
import androidGreetingsStart from '../../public/assets/projects/time_management/android_greetings_start.jpg';
import androidList from '../../public/assets/projects/time_management/android_list.jpg';
import androidMain from '../../public/assets/projects/time_management/android_main.jpg';
import androidStart from '../../public/assets/projects/time_management/android_start.jpg';

export default [
  {
    title: 'Employee Time Management System',
    about: `This is a commercial, full stack project that was developed based on client needs and is now
       being used by a warehouse company to manage employee work schedules, track vacations, and generate various reports. 
       The system includes a mobile app for employees and an admin web application for managers.`,
    tech: {
      'Front-end': ['React', 'Material UI', 'Realm Web'],
      'Back-end': ['MongoDB Atlas', 'MongoDB Realm Functions', 'RESTful APIs'],
      Mobile: ['React Native', 'MongoDB Realm'],
    },

    links: {
      live: 'https://best-ever-magazyn.netlify.app/',
      github: 'https://github.com/pologora/employee_time_management',
    },
    screenShots: {
      web: [home, employees, vacations, vacations2, raports, raports2],
      mobile: [
        androidMain,
        androidStart,
        androidGreetingsStart,
        androidEnd,
        androidGreetingsEnd,
        androidList,
      ],
    },
  },
];
