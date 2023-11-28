/* eslint-disable react/jsx-props-no-spreading */
import { useTranslation } from 'react-i18next';
import Project from './Project';
import projects from '../../data/projects';

function Projects() {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const projectsListElements = projects.map((item) => (
    <Project key={item.en.title} {...item[language]} />
  ));
  return (
    <section id="projects">
      <div className="container">
        <h2 className="text-projects mb-20">{t('projects.title')}</h2>
        {projectsListElements}
      </div>
    </section>
  );
}
export default Projects;
