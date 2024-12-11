import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App/App";
import rootReducer, { initialState } from "./reducers/rootReducer";

// Enable Redux DevTools if available, or use standard compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with the root reducer and initial state
const store = createStore(
  rootReducer, // No need to wrap with combineReducers, as rootReducer is already combined
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// Render the React application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
