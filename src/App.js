import React from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePropertyComponent from "./components/CreatePropertyComponent";
import ListPropertyComponent from "./components/ListPropertyComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPropertyComponent}></Route>
            <Route
              path="/add-property/:id"
              component={CreatePropertyComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
