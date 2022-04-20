import React, { Component } from "react";
import App from "../App";
import TodoList from "./todoList";
import TodoCreate from "./todoCreate";

class TodoContent extends Component{
    render() {
        return(
            <section className={'listArea'}>
                <div className={'listBox'}>
                    <h2 class={'heading__note'}>note.</h2>
                    <p className={'todoCount'}>✔️ Complete : <span>0</span></p>
                    <TodoList></TodoList>
                    <TodoCreate></TodoCreate>
                </div>
            </section>
        )
    }
}

export default TodoContent;