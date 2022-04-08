import React, { Component } from "react";
import App from "./App";

class MyName extends Component{
    static defaultProps = {
        name: 'React1233'
    }

    render() {
        return(
            <div>
                안녕하세요 ! 제 이름은 <span>{this.props.name}</span>입니다 !!
            </div>
        )
    }
}

export default MyName;