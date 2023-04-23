function ContactVariation({
  text, title, color, link,
}) {
  const linkClassName = title === 'Resume' ? 'font-bold' : `text-${color}`;

  return (
    <li className="sm:ml-10 flex place-items-center gap-2">
      <div className="w-3 h-3 bg-contact" />
      <div className="flex place-items-baseline gap-2">
        <p>{text}</p>
        {' '}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          download={title === 'Resume' ? 'OleksandrLysakovCV.pdf' : undefined}
          className={`${linkClassName} font-bold`}
        >
          {title}
        </a>
        {' '}
      </div>
    </li>
  );
}
export default ContactVariation;
