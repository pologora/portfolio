import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
  return (
    <section className="place-items-center py-48" id="home">
      <div className="container home z-[-10] relative h-full">
        <h2 className="text-text_secondary">{t('home.welcome')}</h2>
        <h1 className="my-10 text-text_main">
          {t('home.title')}
          {' '}
          <span className="text-home">{t('home.name')}</span>
        </h1>

        <h2 className="text-text_secondary">{t('home.description')}</h2>
      </div>
    </section>
  );
}
export default HomePage;
