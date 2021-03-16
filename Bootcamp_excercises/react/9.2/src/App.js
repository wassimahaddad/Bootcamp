import React from "react";
import "./App.css";
import Album from "./Components/Album";

class App extends React.Component {
  render() {
    return (
      <div>
        <Album
          title="Quarter to six"
          name="Idan Raichel Project"
          tracks="16"
          length="00:55:02"
          url="#"
          song="Mon Amour"
          url="https://www.youtube.com/watch?v=HaCpc7osbek"
        />
        <Album
          title="Metallica"
          name="Metallica"
          tracks="12"
          length="1:02:37"
          song="The Unforgiven"
          url="https://www.youtube.com/watch?v=Ckom3gf57Yw"
        />
        <Album
          title="An Awesome Wave"
          tracks="13"
          url="https://www.youtube.com/watch?v=Qg6BwvDcANg"
          song="Tesselate"
        />
        <Album />
      </div>
    );
  }
}

export default App;
