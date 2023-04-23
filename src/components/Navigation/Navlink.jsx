import Link from 'next/link';

function Navlink({
  type, url, title, handleMenuClose,
}) {
  if (type === 'type5') {
    return (
      <li>
        <a
          className={`text-xs font-bold uppercase z-100 button ${type}`}
          href={url}
          onClick={handleMenuClose}
          target="_blank"
          rel="noopener noreferrer"
          download="OleksandrLysakovCV.pdf"
        >
          {title}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link
        className={`text-xs font-bold uppercase z-100 button ${type}`}
        href={url}
        onClick={handleMenuClose}
        scroll={false}
      >
        {title}
      </Link>
    </li>
  );
}
export default Navlink;
