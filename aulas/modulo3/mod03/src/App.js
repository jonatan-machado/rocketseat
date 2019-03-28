//importação externa
import React from "react";
import { Provider } from "react-redux";

//importação interna
import "./config/reactototron";
import store from "./store";
import TodoList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);
export default App;
