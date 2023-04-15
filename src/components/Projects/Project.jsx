import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { useEffect, useState } from 'react';
import TechList from '../shared/TechList';
import ScreenShootsList from './ScreenShootsList';

function Project({
  title, about, tech, links, screenShots,
}) {
  const [isMobile, setIsMobile] = useState(false);

  const checkIsMobile = () => {
    if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
      const { userAgent } = window.navigator;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );
      setIsMobile(isMobileDevice);
    }
  };

  useEffect(() => {
    checkIsMobile();
  }, []);

  return (
    <article>
      <div className="mb-10">
        <div className="flex justify-between md:place-items-center place-items-center gap-10 mb-10 flex-col md:flex-row">
          <h3 className="uppercase font-semibold">{title}</h3>
          <div className="flex gap-10 md:gap-6 text-projects">
            <a href={links.github} target="blank">
              <FaGithub size={25} />
            </a>
            <a href={links.live} target="blank">
              <IoMdOpen size={25} />
            </a>
          </div>
        </div>
        <p className="mb-5">{about}</p>
      </div>
      <div className="">
        <div>
          <ScreenShootsList screenShots={isMobile ? screenShots.mobile : screenShots.web} />
        </div>
      </div>
      <div className="mt-10">
        <TechList tech={tech} color="projects" />
      </div>
    </article>
  );
}
export default Project;
