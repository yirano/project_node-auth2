import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from "./Components/App";
import reducer from "./Utils/Reducer/reducer"
import { applyMiddleware, createStore } from "redux"

const store = createStore(reducer, applyMiddleware(thunk))

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
