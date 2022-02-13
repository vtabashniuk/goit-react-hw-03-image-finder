import React, { Component } from "react";
import getImages from "./api/getImages";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { BallTriangle } from "react-loader-spinner";

const INITIAL_STATE = {
  imagesCollection: [],
  currentPage: 1,
  searchQuery: "",
  isLoading: false,
};

class App extends Component {
  state = {
    imagesCollection: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
  };

  formSubmitHandler = (query) => {
    this.setState({ ...INITIAL_STATE, searchQuery: query });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    getImages(searchQuery, currentPage)
      .then((data) => {
        this.setState((prevState) => ({
          imagesCollection: [...prevState.imagesCollection, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
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
        {this.state.isLoading && (
          <BallTriangle
            heigth="100"
            width="100"
            color="grey"
            ariaLabel="loading-indicator"
          />
        )}
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
