import { useState } from 'react';
import SmallText from './SmallText';
import MediumText from './MediumText';
import FullText from './FullText';
import TechList from './TechList';
import ChooseBioPanel from './ChooseBioPanel';

function About() {
  const [componentToRender, setComponentToRender] = useState(<FullText />);

  const handleChangeText = (e) => {
    switch (e.target.name) {
      case 'small':
        setComponentToRender(<SmallText />);
        break;
      case 'medium':
        setComponentToRender(<MediumText />);
        break;
      case 'full':
        setComponentToRender(<FullText />);
        break;
      default:
        setComponentToRender(<FullText />);
        break;
    }
  };

  return (
    <section id="about">
      <div className="container">
        <h2 className="text-about mb-10">About Me</h2>
        <ChooseBioPanel handleChangeText={handleChangeText} />
        <div className="py-4 about relative z-[-10]">
          {componentToRender}
          <p className="my-5">
            By the way, here are a few technologies I&apos;ve been working with recently:
          </p>
          <TechList />
        </div>
      </div>
    </section>
  );
}
export default About;
