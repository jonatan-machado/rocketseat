//importação externas
import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

//importação internas
import * as TodoActions from "./store/actions/todos";

const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button onClick={() => addTodo("Novo Todo")}>Adicionar</button>
  </Fragment>
);

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispach => bindActionCreators(TodoActions, dispach);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
