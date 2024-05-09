import CardsList from "./CardsList";
import FilterMenu from "./FilterMenu";
import Header from "./Header";

const AppContainer = () => {

  
  return (
    <div className="app-container">
      <Header />
      <FilterMenu />
      <CardsList />
    </div>
  );
};
export default AppContainer;
