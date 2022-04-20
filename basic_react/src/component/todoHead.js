import React, { Component } from "react";
import App from "../App";

class TodoHead extends Component{
    static defaultProps = {
        name: '(Somthing you have to do..)'
    }

    render() {
        return(
            <section className={'headingArea'}>
                {/*<h1 className={'heading__h1'}>Do it !</h1>*/}
                <p className={'desctext'}>Enter your to-do and Complete ! <span>{this.props.name}</span></p>
            </section>
        )
    }
}

export default TodoHead;