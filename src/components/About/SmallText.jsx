import { useTranslation } from 'react-i18next';

function SmallText() {
  const { t } = useTranslation();
  return (
    <article>
      <p className="my-5">{t('about.biography.small.paragraph1')}</p>
    </article>
  );
}
export default SmallText;
