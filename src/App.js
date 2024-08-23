import './App.css';
import store from "./store/store.js";
import { Provider } from "react-redux";
import MainRouter from './router/Router.jsx';

function App({ children }) {
  return (
    <div className="App">

      <Provider store={store} >
        <MainRouter>
        </MainRouter>
      </Provider>

    </div>
  );
}

export default App;