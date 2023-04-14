import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';

function Project({
  title, about, tech, links, screenShoots,
}) {
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
      <div className="projects relative z-[-10]">
        <div className="">
          <Image src={screenShoots[0]} />
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex flex-wrap gap-4">
          {tech.map((item) => (
            <div className="flex place-items-center gap-1">
              <div className="w-2 h-2 bg-projects" />
              <li className="text-projects" key={item}>
                <p className="text-sm">{item}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </article>
  );
}
export default Project;
