import { useState } from 'react';
import SmallText from './SmallText';
import MediumText from './MediumText';
import FullText from './FullText';
import TechList from '../shared/TechList';
import ChooseBioPanel from './ChooseBioPanel';
import techList from '../../data/techList';

function About() {
  const [componentToRender, setComponentToRender] = useState(<MediumText />);

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
    <section id="about" className="bg-background_secondary relative">
      <div className="container">
        <h2 className="text-about mb-10">Who I Am</h2>
        <ChooseBioPanel handleChangeText={handleChangeText} />
        <div className="py-4 about relative">
          {componentToRender}
          <p className="my-5">
            By the way, here are a few technologies I&apos;ve been working with recently:
          </p>
          <TechList tech={techList} color="about" />
        </div>
      </div>
    </section>
  );
}
export default About;
