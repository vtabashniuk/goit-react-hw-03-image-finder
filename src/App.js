import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";

class App extends Component {
  state = {
    searchQuery: "",
  };

  formSubmitHandler = (data) => {
    this.setState({ ...data });
  };

  componentDidUpdate(prevProps, prevState) {
    const query = this.state.searchQuery;
    const BASE_URL = "https://pixabay.com/api/";
    const axiosParams = {
      params: {
        key: "22416794-3b1c3083ab7ce728d60190093",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12,
      },
    };
    axios
      .get(BASE_URL, axiosParams)
      .then((response) => console.log(response.data.hits));
  }

  render() {
    return (
      <>
        <h1 className="title">Homework 3</h1>
        <Searchbar onSubmit={this.formSubmitHandler}></Searchbar>
      </>
    );
  }
}

export default App;
