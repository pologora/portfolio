/* eslint-disable react/jsx-props-no-spreading */
import { useTranslation } from 'react-i18next';
import socials from '../../data/socials';
import ContactVariation from './ContactVariation';

function Contact() {
  const { i18n, t } = useTranslation();
  const { language } = i18n;
  return (
    <section id="contact" className="bg-background_secondary relative ">
      <div className="container">
        <h2 className="text-contact mb-10">{t('contact.title')}</h2>
        <p className="mb-5">{t('contact.description')}</p>
        <ul className="flex gap-4 flex-col border-b-contact border-b-2 pb-5">
          {socials[language]?.map((item) => (
            <ContactVariation {...item} key={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Contact;
