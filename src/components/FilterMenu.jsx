import { useState } from "react";
const FilterMenu = () => {
  const filterList = [
    { name: "date :", options: ["newest", "oldest"] },
    { name: "Category :", options: ["sport", "poletic", "economy", "war"] },
    { name: "Source :", options: ["Cnn", "News API", "News Cred"] },
    { name: "My Feed", options: null },
  ];
  const [selectedFilterItem, setSelectedFilterItem] = useState(0);

  return (
    <div className="filterMenu-container">
      {filterList.map((item, index) => (
        <div key={index} className="filterMenu-item">
          {index === filterList.length - 1 ? null : <span>{item.name}</span>}
          <div
            onClick={() => setSelectedFilterItem(index)}
            className="filter-item"
          >
            {index === filterList.length - 1 ? (
              <>
                <span
                  className={
                    selectedFilterItem === index
                      ? "filter-item-selected"
                      : "filter-item"
                  }
                >
                  {item?.name}
                </span>
              </>
            ) : (
              <select name={item} id={item}>
                {item.options.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterMenu;
