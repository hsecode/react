import React, { Component } from "react";
import App from "../App";

class TodoList extends Component{
    render() {
        return(
            <ul className={'todoList'}>
                {/*최대 11개 등록 가능*/}
                <li className={'todoItem'}>
                    <label>
                        <input type="checkbox"/>
                        <span className={'checkIcon'}></span>
                        <span className={'labelText'}>123123123123123123123123123123123123</span>
                    </label>
                    <button type={'button'} className={'btnDel'}>삭제</button>
                </li>
                <li className={'todoItem'}>
                    <label>
                        <input type="checkbox"/>
                        <span class={'checkIcon'}></span>
                        <span className={'labelText'}>123123</span>
                    </label>
                    <button type={'button'} className={'btnDel'}>삭제</button>
                </li>
            </ul>
        )
    }
}

export default TodoList;