import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>has something something something</div>
            </Provider>
        );
    }
}

// ReactDOM.render (<App />, document.getElementById("app"));



