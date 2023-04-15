function TechList({ color, tech }) {
  const techListElement = Object.entries(tech).map(([category, items]) => (
    <div key={category}>
      <h3 className="text-base font-semibold mb-2">
        {category}
        :
      </h3>
      <ul className={`text-${color}`}>
        {items.map((item) => (
          <div key={item} className="flex place-items-center gap-1">
            <div className={`w-2 h-2 bg-${color}`} />
            <li>
              <p className="text-sm">{item}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  ));
  return (
    <div className="flex flex-col gap-4 my-5 md:flex-row md:justify-evenly">{techListElement}</div>
  );
}
export default TechList;
