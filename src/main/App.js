import React from "react";
import Routes from "./routes";
import Navebar from "../components/navbar";

import "bootswatch/dist/flatly/bootstrap.css";
import "../custom.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navebar />
        <div>
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
