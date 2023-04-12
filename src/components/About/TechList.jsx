import techList from '../../data/techList';

function TechList() {
  const techListElements = techList.map((item) => (
    <li className="uppercase text-sm" key={item}>
      {item}
    </li>
  ));
  return <ul className="flex flex-wrap gap-6 tech-list">{techListElements}</ul>;
}
export default TechList;
