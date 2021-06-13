import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom"; 
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"; 
import "./style.css";
import Routes from "./engine/Routes";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes />
      </Router>
    </Fragment>
  );
};

export default App;
