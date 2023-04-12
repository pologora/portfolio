import { full } from '../../data/bioText';

function FullText() {
  return (
    <article>
      {full.map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className="my-5" key={i}>
          {item}
        </p>
      ))}
    </article>
  );
}
export default FullText;
