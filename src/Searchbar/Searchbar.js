import React, { Component } from "react";
import Button from "../Button";

class Searchbar extends Component {
  state = {
    searchQuery: "",
  };

  resetForm() {
    this.setState({ searchQuery: "" });
  }

  onSearchHandler = (event) => {
    const inputValue = event.currentTarget.value;
    this.setState({ searchQuery: inputValue });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  render() {
    const formButtonOptions = { type: "submit", label: "Search" };
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.onSubmitHandler}>
            <Button options={formButtonOptions} />
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onSearchHandler}
              value={this.state.searchQuery}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
