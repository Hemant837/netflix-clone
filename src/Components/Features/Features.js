import React, { Component } from "react";
import "./Features.css";

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <div className="Row">
          <div className="Text-column">
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="Image-column">
            <img src="feature-1.png" />
          </div>
        </div>
        <div className="Row">
          <div className="Image-column">
            <img src="feature-2.png" />
          </div>
          <div className="Text-column">
            <h2>Download your shows to watch offline.</h2>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
        <div className="Row">
          <div className="Text-column">
            <h2>Watch everywhere.</h2>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="Image-column">
            <img src="feature-3.png" />
          </div>
        </div>
        <div className="Row">
          <div className="Image-column">
            <img src="feature-4.png" />
          </div>
          <div className="Text-column">
            <h2>Create profiles for children.</h2>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
