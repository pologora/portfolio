import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { useEffect, useState } from 'react';
import TechList from '../shared/TechList';
import ScreenShootsList from './ScreenShootsList';

function Project({
  title, about, tech, links, screenShots,
}) {
  const [isMobile, setIsMobile] = useState(null);

  const checkIsMobile = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600);
    }
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return (
    <article className="mb-40 last:mb-0">
      <div className="my-20">
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
      <div className="border-b-2 border-b-projects my-10 " />
    </article>
  );
}
export default Project;
