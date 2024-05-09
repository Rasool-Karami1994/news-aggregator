import { Provider } from "react-redux";
import AppContainer from "./components/AppContainer";
import "./styles/index.scss";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;
