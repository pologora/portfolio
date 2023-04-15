/* eslint-disable react/jsx-props-no-spreading */
import socials from '../../data/socials';
import ContactVariation from './ContactVariation';

function Contact() {
  return (
    <section id="contact" className="bg-background_secondary relative ">
      <div className="container">
        <h2 className="text-contact mb-10">Let&apos;s Connect!</h2>
        <p className="mb-5">
          I&apos;m always excited to discuss new opportunities and collaborations. You can contact
          me through the following channels:
        </p>
        <ul className="flex gap-4 flex-col border-b-contact border-b-2 pb-5">
          {socials.map((item) => (
            <ContactVariation {...item} key={item.title} />
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Contact;
