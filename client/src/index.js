import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"; // You need to import Provider to connect the store

import store from "./store/store"; // Import the store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {" "}
    {/* Wrap your App with the Provider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
