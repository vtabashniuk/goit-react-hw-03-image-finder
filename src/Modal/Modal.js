import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  escapeKeyDownHandler = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.escapeKeyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.escapeKeyDownHandler);
  }

  render() {
    return (
      <div className={styles.backdrop}>
        <div className={styles.modal}>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
