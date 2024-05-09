import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../features/filters/filtersSlice";
const FilterMenu = () => {
  const filterList = [
    { value: "date", name: "Date :", options: ["none", "newest", "oldest"] },
    {
      value: "category",
      name: "Category :",
      options: ["none", "sport", "poletic", "economy", "war"],
    },
    {
      value: "source",
      name: "Source :",
      options: ["none", "Cnn", "News API", "News Cred"],
    },
    { value: "feed", name: "My Feed", options: null },
  ];
  const [selectedFilterItem, setSelectedFilterItem] = useState(0);

  const dispatch = useDispatch();

  return (
    <div className="filterMenu-container">
      {filterList.map((item, index) => (
        <div key={index} className="filterMenu-item">
          {index === filterList.length - 1 ? null : <span>{item.name}</span>}
          <div
            onClick={() => {
              setSelectedFilterItem(index);
            }}
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
              <select
                name={item}
                id={item}
                onClick={(e) => {
                  console.log(e.target.value);
                  let selectedValue = e.target.value;
                  let key = item.value;
                  const payload = {
                    key: key,
                    selectedValue: selectedValue,
                  };
                  dispatch(addFilter(payload));
                }}
              >
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
