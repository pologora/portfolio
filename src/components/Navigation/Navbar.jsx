import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Navlink from './Navlink';
import links from '../../data/menu';

function Navbar({ handleMenuClose, handleMenuOpen, isMenuOpen }) {
  const [isShadow, setIsShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setIsShadow(true);
      } else {
        setIsShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const linksElements = links.map((item) => (
    <Navlink
      key={item.type}
      type={item.type}
      url={item.url}
      title={item.title}
      handleMenuClose={handleMenuClose}
    />
  ));

  return (
    <nav
      className={`fixed w-full h-16  z-10 px-4 2xl:px-16 ${
        isShadow && 'shadow-xl'
      } bg-background_main`}
    >
      <ul className="hidden md:flex gap-8 justify-end items-center w-full h-full">
        {linksElements}
      </ul>

      {!isMenuOpen && (
        <div className="md:hidden absolute right-4 top-4 cursor-pointer">
          <button type="button" onClick={handleMenuOpen}>
            <AiOutlineMenu size={28} />
          </button>
        </div>
      )}
      <div
        className={
          isMenuOpen
            ? 'md:hidden fixed left-0 top-0 w-full bg-background_main h-screen ease-in duration-500'
            : 'fixed left-0 top-[-100%] w-full ease-in duration-500'
        }
      >
        {isMenuOpen && (
          <div>
            <button
              type="button"
              onClick={handleMenuClose}
              className="  absolute right-4 top-4 cursor-pointer"
            >
              <AiOutlineClose size={28} />
            </button>
          </div>
        )}
        <ul className="flex flex-col place-items-center gap-12 mt-28 z-10">{linksElements}</ul>
      </div>
    </nav>
  );
}
export default Navbar;
