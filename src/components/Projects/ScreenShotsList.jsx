import { useEffect, useState } from 'react';
import Image from 'next/image';

function ScreenShotsList({ screenShots }) {
  const [activeScreen, setActiveScreen] = useState(screenShots[0]);

  useEffect(() => {
    setActiveScreen(screenShots[0]);
  }, [screenShots]);

  const handleChangeImageClick = (e) => {
    setActiveScreen(screenShots[e.target.name]);
  };

  const changeScreenElements = screenShots.map((item, index) => (
    <button
      key={item.src}
      className={`h-3 w-3 border-projects border-2 ${
        activeScreen.src === item.src && 'bg-projects'
      }`}
      type="button"
      name={index}
      onClick={(e) => handleChangeImageClick(e)}
      aria-label="Change screenshot"
    />
  ));

  return (
    <div>
      <div className="projects relative z-[-10]">
        <Image src={activeScreen} alt="Project screenshot" />
      </div>
      <div className="flex justify-center pt-10 gap-5">{changeScreenElements}</div>
    </div>
  );
}
export default ScreenShotsList;
