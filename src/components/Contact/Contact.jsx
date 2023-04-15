function Contact() {
  return (
    <section id="contact" className="bg-background_secondary relative">
      <div className="container">
        <h2 className="text-contact mb-10">Let&apos;s Connect!</h2>
        <p className="mb-5">
          I&apos;m always excited to discuss new opportunities and collaborations. You can contact
          me through the following channels:
        </p>
        <ul className="flex gap-4 flex-col list-disc">
          <li>
            Send me an email at
            {' '}
            <a
              href="mailto:lysakov555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-home"
            >
              Gmail
            </a>
          </li>
          <li>
            Check out my work on
            {' '}
            <a
              href="https://github.com/pologora"
              target="_blank"
              className="text-about"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            Connect with me on
            {' '}
            <a
              href="https://www.linkedin.com/in/oleksandr-lysakov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-projects"
            >
              LinkedIn
            </a>
          </li>
          <li>
            You can also download my
            {' '}
            <a href="/resume.pdf" download="resume.pdf" className="font-bold">
              Resume
            </a>
            {' '}
            for more information about my skills and experience.
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Contact;
