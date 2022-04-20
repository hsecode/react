import React, { Component } from "react";
import App from "../App";

class TodoCreate extends Component{
    render() {
        return(
            <div className={'createArea'}>
                <input type="text" className={'inputItem'} placeholder={'Entering to-do list. . .'}/>
                <button type={"button"} class={'btnEnter'}><span className={'arrowIcon'}></span>Enter</button>
            </div>
        )
    }
}

export default TodoCreate;