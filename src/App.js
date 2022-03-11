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
    error: null,
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
    const { largeImageURL, tags } = this.state.imagesCollection.find(
      (image) => image.id === id
    );
    this.setState({ modalImage: { largeImageURL, tags } });
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
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log("bad response");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          console.log("bad request");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        // console.log(error.config);
      })
      // .catch(() => console.log("error"))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { largeImageURL, tags } = this.state.modalImage;
    return (
      <>
        <h1 className="title">Homework 3. Task 3.2</h1>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img className="modal-image" src={largeImageURL} alt={tags} />
          </Modal>
        )}
        {this.state.isLoading && (
          <Modal>
            <BallTriangle
              heigth={100}
              width={100}
              color="green"
              ariaLabel="loading-indicator"
            />
          </Modal>
        )}
        <div className="App">
          <Searchbar onSubmit={this.formSubmitHandler} />
          <ImageGallery
            images={this.state.imagesCollection}
            loadMore={this.fetchImages}
            onImageClickHandler={this.onImageClickHandler}
            showButton={this.state.imagesCollection.length !==0}
          />
        </div>
      </>
    );
  }
}

export default App;
