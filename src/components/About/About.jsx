import { useState } from 'react';
import SmallText from './SmallText';
import MediumText from './MediumText';
import FullText from './FullText';

function About() {
  const [componentToRender, setComponentToRender] = useState('');

  const handleChangeText = (e) => {
    console.log(e.target.name);
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
    <section id="about" className=" flex-col">
      <h2 className="text-about">About</h2>
      <h3 className="uppercase text-sm">Choose bio length:</h3>
      <div>
        <button type="button" className="button" name="small" onClick={(e) => handleChangeText(e)}>
          small
        </button>
        <button type="button" className="button" name="medium" onClick={(e) => handleChangeText(e)}>
          medium
        </button>
        <button type="button" className="button" name="full" onClick={(e) => handleChangeText(e)}>
          big
        </button>
      </div>
      <div className="border-t-2 border-t-about border-b-2 border-b-about max-w-4xl mx-10">
        {componentToRender}
      </div>
    </section>
  );
}
export default About;
