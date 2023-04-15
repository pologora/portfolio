import Link from 'next/link';

function Navlink({
  type, url, title, handleMenuClose,
}) {
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
