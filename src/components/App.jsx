import React from "react";
import Register from "./Register";
import Header from "./Header";
import Footer from "./Footer";
import User from "./User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={
              JSON.parse(window.localStorage.getItem("isAuth"))
                ? User
                : Register
            }
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
