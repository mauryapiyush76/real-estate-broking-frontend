import React from "react";
import "./App.css";
import HeaderComponent from "./components/shared/HeaderComponent";
import FooterComponent from "./components/shared/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePropertyComponent from "./components/property/CreatePropertyComponent";
import ListPropertyComponent from "./components/property/ListPropertyComponent";
import UpdatePropertyComponent from "./components/property/UpdatePropertyComponent";
import ViewPropertyComponent from "./components/property/ViewPropertyComponent";
import LoginComponent from "./components/usermanagement/LoginComponent";
import SearchPropertyComponent from "./components/property/SearchPropertyComponent";
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/login" component={LoginComponent}></Route>
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
            <Route
              path="/search-property"
              component={SearchPropertyComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
