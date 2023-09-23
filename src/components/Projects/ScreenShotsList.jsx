import { useEffect, useState } from 'react';

function ScreenShotsList({ screenShots }) {
  const { web, mobile, path } = screenShots;
  const [activeImageMobile, setActiveImageMobile] = useState(mobile[0]);
  const [activeImageDesktop, setActiveImageDesctop] = useState(web[0]);

  useEffect(() => {
    setActiveImageMobile(mobile[0]);
    setActiveImageDesctop(web[0]);
  }, [web, mobile]);

  const handleChangeImageClick = (index) => {
    setActiveImageMobile(mobile[index]);
    setActiveImageDesctop(web[index]);
  };

  const changeScreenElements = web.map((item, index) => (
    <button
      key={item}
      className={`h-3 w-3 border-projects border-2 ${
        activeImageMobile === item || (activeImageDesktop === item && 'bg-projects')
      }`}
      type="button"
      onClick={() => handleChangeImageClick(index)}
      aria-label="Change screenshot"
    />
  ));

  return (
    <div>
      <div className="projects relative z-[-10]">
        <picture>
          <source media="(min-width:640px)" srcSet={path + activeImageDesktop} />
          <img src={path + activeImageMobile} alt="Project screenshot" />
        </picture>
      </div>
      <div className="flex justify-center pt-10 gap-5">{changeScreenElements}</div>
    </div>
  );
}
export default ScreenShotsList;
