import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-text_main text-background_main p-6 text-center">
      <div>
        <p className="text-sm">{`© ${year} Oleksandr Lysakov. All rights reserved.`}</p>
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <a href="https://github.com/pologora" target="blank">
          <FaGithub size={25} />
        </a>
        <a href="mailto:lysakov555@gmail.com" target="blank">
          <AiOutlineMail size={25} />
        </a>
        <a href="https://www.linkedin.com/in/oleksandr-lysakov/" target="blank">
          <AiFillLinkedin size={25} />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
