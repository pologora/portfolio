import techList from '../../data/techList';

function TechList() {
  const techListElements = techList.map((item) => (
    <li className="uppercase text-xs sm:text-sm font-semibold" key={item}>
      <div className="flex gap-2 place-items-center">
        <div className="w-2 h-2 bg-about" />
        {item}
      </div>
    </li>
  ));
  return <ul className="flex flex-wrap gap-6 tech-list my-5">{techListElements}</ul>;
}
export default TechList;
