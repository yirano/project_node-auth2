import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./Components/App";
import reducer from "./Utils/Reducer/reducer";
import { applyMiddleware, createStore } from "redux";
import { CookiesProvider } from "react-cookie";

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <CookiesProvider>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </CookiesProvider>,
  document.querySelector("#root")
);
