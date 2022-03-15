import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

class Searchbar extends Component {
  state = {
    searchQuery: "",
    isDisabledSearchBtn: true,
  };

  resetForm() {
    this.setState({ searchQuery: "", isDisabledSearchBtn: true });
  }

  onSearchHandler = (event) => {
    const inputValue = event.currentTarget.value;
    this.setState({ searchQuery: inputValue, isDisabledSearchBtn: false });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.resetForm();
  };

  render() {
    const formButtonOptions = {
      className: "SearchForm-button",
      labelClass: "SearchForm-button-label",
      type: "submit",
      label: "Search",
      isDisabled: this.state.isDisabledSearchBtn,
    };
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onSubmitHandler}>
            <Button options={formButtonOptions} />
            <input
              className="SearchForm-input"
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

Searchbar.propTypes = { onSubmit: PropTypes.func };
export default Searchbar;
