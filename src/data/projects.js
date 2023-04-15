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
import punksHome from '../../public/assets/projects/cpunks/home.png';
import punksGallery from '../../public/assets/projects/cpunks/gallery.png';
import punksMint from '../../public/assets/projects/cpunks/mint.png';
import punksMyPunks from '../../public/assets/projects/cpunks/myPunks.png';
import punksSoloPunk from '../../public/assets/projects/cpunks/solo_punk.png';

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
  {
    title: 'NFT project on Cronos blockchain',
    about: `The "CPunks" NFT Collection is an innovative project on the Cronos blockchain, consisting of 10,000
     uniquely generated characters.
     With meticulous design and attention to detail, no two characters are identical.

    The collection features 9 alien species, 24 intelligent apes, and 88 zombies, all possessing 87 unique attributes,
     including rare traits, accessories, and special abilities.`,
    tech: {
      'Front-end': ['React', 'CSS'],
      'Back-end': ['Solidity'],
    },

    links: {
      live: 'https://cronos-cpunks.netlify.app/',
      github: 'https://github.com/pologora/punks',
    },
    screenShots: {
      web: [punksHome, punksGallery, punksMint, punksMyPunks, punksSoloPunk],
      mobile: [punksHome, punksGallery, punksMint, punksMyPunks, punksSoloPunk],
    },
  },
];
