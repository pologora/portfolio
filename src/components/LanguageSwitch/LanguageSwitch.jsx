import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';

const languageList = [
  { lng: 'en', title: 'English' },
  { lng: 'pl', title: 'Polski' },
];

function LanguageSwitch() {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLanguageMenuClick = () => setLanguageMenuOpen((prev) => !prev);

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    handleLanguageMenuClick();
  };

  const renderedLanguageChangeButtons = languageList.map((item) => (
    <li key={item.lng}>
      <button
        type="button"
        className="hover:text-projects mb-2"
        onClick={() => changeLanguage(item.lng)}
        aria-label={`Change language to ${item.title}`}
      >
        {item.title}
      </button>
    </li>
  ));

  return (
    <li className="relative border gradient-border p-1">
      <button
        type="button"
        onClick={handleLanguageMenuClick}
        className="flex items-center justify-center"
        aria-label="Open language change menu"
      >
        <MdOutlineLanguage className="text-2xl text-projects inline-block mr-1" />
        <span className="w-10 text-projects text-xs font-bold">{i18n.language.toUpperCase()}</span>
      </button>
      <ul
        className={`${
          languageMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } mt-2 absolute top-10 left-0 transform transition-opacity duration-300 ease-in-out 
        bg-background_main px-4 shadow-lg`}
      >
        {renderedLanguageChangeButtons}
      </ul>
    </li>
  );
}
export default LanguageSwitch;
