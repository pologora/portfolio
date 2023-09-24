import { useTranslation } from 'react-i18next';

function FullText() {
  const { t } = useTranslation();
  return (
    <article>
      <p className="my-5">{t('about.biography.full.paragraph1')}</p>
      <p className="my-5">{t('about.biography.full.paragraph2')}</p>
      <p className="my-5">{t('about.biography.full.paragraph3')}</p>
    </article>
  );
}
export default FullText;
