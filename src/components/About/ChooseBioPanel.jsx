import { useState } from 'react';
import { useTranslation } from 'react-i18next';

/* eslint-disable jsx-a11y/control-has-associated-label */
const buttons = ['small', 'medium', 'full'];

function ChooseBioPanel({ handleChangeText }) {
  const [activeText, setActiveText] = useState('medium');
  const { t } = useTranslation();

  const handleChangeClick = (e) => {
    handleChangeText(e);
    setActiveText(e.target.name);
  };
  return (
    <div className="flex flex-col place-items-center my-4">
      <h3 className="uppercase text-sm">{t('about.biography.title')}</h3>
      <div>
        {buttons.map((item) => (
          <button
            type="button"
            name={item}
            key={item}
            className={`cursor-pointer ${item} border-about border-2 ease-in duration-150 h-4 m-4 ${
              activeText === item && 'bg-about'
            }`}
            onClick={(e) => handleChangeClick(e)}
          />
        ))}
      </div>
    </div>
  );
}
export default ChooseBioPanel;
