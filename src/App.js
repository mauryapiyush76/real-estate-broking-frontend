import React from "react";
import "./App.css";
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePropertyComponent from "./components/property/CreatePropertyComponent";
import ListPropertyComponent from "./components/property/ListPropertyComponent";
import UpdatePropertyComponent from "./components/property/UpdatePropertyComponent";
import ViewPropertyComponent from "./components/property/ViewPropertyComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListPropertyComponent}></Route>
            <Route path="/properties" component={ListPropertyComponent}></Route>
            <Route
              path="/add-property/:id"
              component={CreatePropertyComponent}
            ></Route>
            <Route
              path="/view-property/:id"
              component={ViewPropertyComponent}
            ></Route>
            <Route
              path="/update-property/:id"
              component={UpdatePropertyComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
