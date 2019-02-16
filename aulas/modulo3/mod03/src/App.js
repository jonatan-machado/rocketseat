//importação externo
import React from "react";
import { Provider } from "react-redux";

//importação interno
import store from "./store";
import TodoList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <h1>Hello World</h1>
    <TodoList />
  </Provider>
);

export default App;
