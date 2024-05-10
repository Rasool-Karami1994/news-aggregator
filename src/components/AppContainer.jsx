import { useEffect } from "react";
import CardsList from "./CardsList";
import FilterMenu from "./FilterMenu";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { getInitialCardsListData } from "../features/cardsList/cardsListSlice";

const AppContainer = () => {
  const dispatch = useDispatch();
  const cardsList = useSelector((state) => state.cardsList);
  const filters = useSelector((state) => state.filters);
  const { error, loading, data } = cardsList;
  useEffect(() => {
    dispatch(getInitialCardsListData(filters));
  }, [filters, dispatch]);

  return (
    <div className="app-container">
      <Header />
      <FilterMenu />
      {loading ? (
        <div className="svg-container">
          <svg
            className="spinner"
            width="65px"
            height="65px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="path"
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            ></circle>
          </svg>
        </div>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <CardsList data={data} />
      )}
    </div>
  );
};
export default AppContainer;
