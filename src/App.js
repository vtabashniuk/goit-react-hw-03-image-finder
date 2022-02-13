import React, { Component } from "react";
import getImages from "./api/getImages";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

const INITIAL_STATE = {
  imagesCollection: [],
  currentPage: 1,
  searchQuery: "",
};

class App extends Component {
  state = {
    imagesCollection: [],
    currentPage: 1,
    searchQuery: "",
  };

  formSubmitHandler = (query) => {
    this.setState({ ...INITIAL_STATE, searchQuery: query });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    getImages(searchQuery, currentPage).then((data) => {
      this.setState((prevState) => ({
        imagesCollection: [...prevState.imagesCollection, ...data],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  render() {
    return (
      <>
        <h1 className="title">Homework 3</h1>
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery
          images={this.state.imagesCollection}
          loadMore={this.fetchImages}
        />
      </>
    );
  }
}

export default App;
