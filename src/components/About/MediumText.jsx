import { useTranslation } from 'react-i18next';

function MediumText() {
  const { t } = useTranslation();
  return (
    <article>
      <p className="my-5">{t('about.biography.medium.paragraph1')}</p>
      <p className="my-5">{t('about.biography.medium.paragraph2')}</p>
      <p className="my-5">{t('about.biography.medium.paragraph3')}</p>
    </article>
  );
}
export default MediumText;
