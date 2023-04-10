import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import Navlink from './Navlink';
import links from '../../data/menu';

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isShadow, setIsShadow] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

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
    <Navlink key={item.type} type={item.type} url={item.url} title={item.title} />
  ));
  return (
    <nav className={`fixed w-full h-16  z[100] px-4 2xl:px-16 ${isShadow && 'shadow-xl'}`}>
      <ul className="hidden md:flex gap-8 justify-end items-center w-full h-full">
        {linksElements}
      </ul>

      {!isOpen && (
        <div className="md:hidden absolute right-4 top-4 cursor-pointer">
          <button type="button" onClick={handleMenuOpen}>
            <AiOutlineMenu size={28} />
          </button>
        </div>
      )}
      <div
        className={
          isOpen
            ? 'md:hidden fixed left-0 top-0 w-full bg-background_main h-screen ease-in duration-300'
            : 'fixed left-0 top-[-100%] w-full ease-in duration-300'
        }
      >
        {isOpen && (
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
        <ul className="flex flex-col place-items-center gap-6 mt-28">{linksElements}</ul>
      </div>
    </nav>
  );
}
export default Navbar;
