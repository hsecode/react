import React, { Component } from "react";
import MyName from "./myname";

class App extends Component {
  render() {
    return <MyName name="Candy"/>;
    // name 값이 없을 경우 (<Myname />) React1233 으로 출력
  }
}

export default App;