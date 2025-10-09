import React, { Component } from "react";
import "./master.css";

class PhotoEntry extends React.Component {
  render() {
    return (
      <div className="photo-entry-block">
        <a href="../Amesterdam.jpg">
          <img
            className="photo-img"
            src="../images/Amesterdam.jpg"
            alt="Amesterdam"
          />
        </a>
        <h5>Summer 2025</h5>
        <h6>Netherland</h6>
      </div>
    );
  }
}

export default PhotoEntry;
