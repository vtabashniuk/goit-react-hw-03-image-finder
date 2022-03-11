import React, { Component } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  escapeKeyDownHandler = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  backdropClickHandler = (e) => {
    if (e.target === e.currentTarget) {
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
    return createPortal(
      <div className={styles.backdrop} onClick={this.backdropClickHandler}>
        <div className={styles.modal}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
