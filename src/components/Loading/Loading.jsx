import React from "react";

class Loading extends React.Component {
  render() {
    return (
      <div>
        <div className="loading-div">
          <iframe
            src="https://giphy.com/embed/icIsSPTiMirwMjUhJI"
            width="100%"
            height="100%"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/icIsSPTiMirwMjUhJI">via GIPHY</a>
        </p>
      </div>
    );
  }
}

export default Loading;
