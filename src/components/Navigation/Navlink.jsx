import Link from 'next/link';

function Navlink({
  type, url, title, handleMenuClose,
}) {
  return (
    <li>
      <Link
        className={`text-xs font-bold uppercase z-100" button font-lato ${type}`}
        href={url}
        onClick={handleMenuClose}
      >
        {title}
      </Link>
    </li>
  );
}
export default Navlink;
