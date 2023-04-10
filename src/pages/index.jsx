import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Navbar from '../components/Navigation/Navbar';
import Projects from '../components/Projects/Projects';
import HomePage from '../components/HomePage/HomePage';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
