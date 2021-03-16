import React from "react";
import "./Album.css";

class Album extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="album">
          <div>
            <p>Album title: </p>
            <p>{this.props.title || "Artsy Fartsy"}</p>
          </div>
          <div>
            <p>Artist name: </p>
            <p>{this.props.name || "Artist"}</p>
          </div>
          <div>
            <p>Number of tracks: </p>
            <p>{this.props.tracks || "10"}</p>
          </div>
          <div>
            <p>Album length: </p>
            <p>{this.props.length || "00:59:59"}</p>
          </div>
          <div className="last">
            <p>Random song video: </p>
            <p>
              <a
                target="_blank"
                href={this.props.url || "https://www.youtube.com/"}
              >
                {this.props.song || "Youtube"}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
