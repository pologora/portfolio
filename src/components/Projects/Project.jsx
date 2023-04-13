import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';

function Project({
  title, about, tech, links, screenShoots,
}) {
  return (
    <article>
      <div className="mb-10">
        <div className="flex justify-between md:place-items-center place-items-end gap-10 mb-10 flex-col md:flex-row">
          <h2>{title}</h2>
          <div className="flex gap-10 md:gap-6">
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
            <li className="text-projects" key={item}>
              <p className="text-sm">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
export default Project;
