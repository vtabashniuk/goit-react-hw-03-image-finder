import React, { Component } from "react";
import getImages from "./api/getImages";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import { BallTriangle } from "react-loader-spinner";
import Modal from "./Modal";

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
    showModal: false,
    modalImage: {},
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      modalImage: {},
    }));
  };

  formSubmitHandler = (query) => {
    this.setState({ ...INITIAL_STATE, searchQuery: query });
  };

  onImageClickHandler = (id) => {
    this.toggleModal();
    console.log("id", id);
    const { largeImageURL, tags } = this.state.imagesCollection.find(
      (image) => image.id === id
    );
    this.setState({ modalImage: { largeImageURL, tags } });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    // this.toggleModal();
    this.setState({ isLoading: true });
    getImages(searchQuery, currentPage)
      .then((data) => {
        this.setState((prevState) => ({
          imagesCollection: [...prevState.imagesCollection, ...data],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .finally(
        // this.toggleModal
        () => this.setState({ isLoading: false })
      );
  };

  render() {
    return (
      <>
        <h1 className="title">Homework 3</h1>
        {this.state.showModal && (
          <Modal
            largeImageURL={this.state.modalImage.largeImageURL}
            tags={this.state.modalImage.tags}
            onClose={this.toggleModal}
          />
        )}
        {this.state.isLoading && (
          <BallTriangle
            heigth={100}
            width={100}
            color="green"
            ariaLabel="loading-indicator"
          />
        )}
        <Searchbar onSubmit={this.formSubmitHandler} />
        <ImageGallery
          images={this.state.imagesCollection}
          loadMore={this.fetchImages}
          onImageClickHandler={this.onImageClickHandler}
        />
      </>
    );
  }
}

export default App;
