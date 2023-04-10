import Link from 'next/link';

function Navlink({ type, url, title }) {
  return (
    <li>
      <Link className={`text-xs font-bold uppercase z-100" button ${type}`} href={url}>
        {title}
      </Link>
    </li>
  );
}
export default Navlink;
