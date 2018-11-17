import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./LandingPage/Home";

import { createStore, applyMiddleware, compose } from "redux";
import promise from "redux-promise";
import { Provider } from "react-redux";

//middleware settings
// To resolve promise to store we use apply
// const composePlugin = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// const store = createStore(rootReducer, composePlugin(applyMiddleware(promise)));
import store from "../store";

//Create a Main Component
class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            {/*Render Different Component based on Route*/}
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
//Export The Main Component
export default Main;
