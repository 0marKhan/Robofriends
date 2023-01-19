import "./App.css";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import CardsList from "./CardsList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      return response.json().then((users) => {
        this.setState({ robots: users });
      });
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardsList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
