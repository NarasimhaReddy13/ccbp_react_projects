import { Component } from "react";
import Welcome from "./Welcome";

class MainComponent extends Component {
  state = { isLoggedIn: false };
  render() {
    const { isLoggedIn } = this.state;
    return (
      <div className="container">
          {isLoggedIn ? <Welcome /> : "Not LoggedIn"}     
      </div>
    );
  }
}

export default MainComponent;