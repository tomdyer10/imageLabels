import React from "react";
import "./App.css";
import Home from "./views/home";
import Game from "./views/game";
import "antd/dist/antd.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inPlay: false
    };
  }

  startGame = () => {
    this.setState({ inPlay: true });
  };

  finishGame = () => {
    this.setState({ inPlay: false });
  };

  render() {
    const { inPlay } = this.state;
    return (
      <div className="App">
        {!inPlay ? (
          <Home start={this.startGame} />
        ) : (
          <Game complete={this.finishGame} />
        )}
      </div>
    );
  }
}

export default App;
