import { useState } from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navigation/Navbar';
import Projects from '../components/Projects/Projects';
import HomePage from '../components/HomePage/HomePage';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <main>
      <Navbar
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        isMenuOpen={isMenuOpen}
      />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
