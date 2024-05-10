import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../features/filters/filtersSlice";
const FilterMenu = () => {
  const filterList = [
    { value: "date", name: "Date :", options: ["none", "newest", "oldest"] },
    {
      value: "category",
      name: "Category :",
      options: ["none", "sport", "Law", "Film", "war"],
    },
    {
      value: "source",
      name: "Source :",
      options: ["none", "Cnn", "NewsAPI", "NewsCred"],
    },
    { value: "feed", name: "My Feed", options: null },
  ];
  const feedList = useSelector((state) => state.feedList);

  const feedHandler = () => {
    let list = feedList.map((item) => item.section);
    const itemCounts = {};
    list.forEach((item) => {
      itemCounts[item] = (itemCounts[item] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(itemCounts));
    const result = Object.keys(itemCounts).reduce((acc, key) => {
      if (itemCounts[key] === maxCount) {
        acc[key] = maxCount;
      }
      return acc;
    }, {});

    const payload = {
      key: "category",
      selectedValue: [Object.keys(result)[0]][0],
    };
    dispatch(addFilter(payload));
  };

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
                  onClick={() => {
                    feedHandler();
                  }}
                >
                  {item?.name}
                </span>
              </>
            ) : (
              <select
                name={item}
                id={item}
                onClick={(e) => {
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
