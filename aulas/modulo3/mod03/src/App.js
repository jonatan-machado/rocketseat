//importação externa
import React from "react";
import { Provider } from "react-redux";

//importação interna
import "./config/reactototron";
import store from "./store";
import Routes from "./routes";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default App;
