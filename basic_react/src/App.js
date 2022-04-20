import React, { Component } from "react";
import TodoHead from "./component/todoHead";
import TodoContent from "./component/todoContent";
import TodoList from "./component/todoList";

class App extends Component {
  render() {
    return (
        <>
          <div className={'todolistWrap'}>
            <TodoHead></TodoHead>
            <TodoContent></TodoContent>
          </div>
        </>
    )
  }
}

export default App;