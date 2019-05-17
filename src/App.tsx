import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Header from "./Header";
import Content from "./Content";
import allReducers from "./reducers";
import { createStore } from "redux";

const store = createStore(allReducers);

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <div className="App">
            <Header name="ROBERT F. SPETZLER" />
            <Content/>
        </div>
      </Provider>
  );
}

export default App;
