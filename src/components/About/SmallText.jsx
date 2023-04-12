/* eslint-disable react/no-array-index-key */
import { small } from '../../data/bioText';

function SmallText() {
  return (
    <article>
      {small.map((item, i) => (
        <p className="my-5" key={i}>
          {item}
        </p>
      ))}
    </article>
  );
}
export default SmallText;
