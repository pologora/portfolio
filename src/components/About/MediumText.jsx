/* eslint-disable react/no-array-index-key */
import { medium } from '../../data/bioText';

function MediumText() {
  return (
    <article>
      {medium.map((item, i) => (
        <p className="my-5" key={i}>
          {item}
        </p>
      ))}
    </article>
  );
}
export default MediumText;
