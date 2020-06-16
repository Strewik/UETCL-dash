import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDates } from "./actions/datesActions";
import { Provider } from "react-redux";
import store from "./store";

export  class App extends Component {
    static propTypes = {
        dates: PropTypes.array.isRequired
    }
    render() {
        return (
            <Provider store={store}>
                <div>has something something something</div>
                <div>
                    {/* <Button onClick={() => alert("Button clicked")}>
                        Create new project
                    </Button> */}
                </div>
            </Provider>
        );
    }
}

const mapStateToProps = state =>({
    dates: state.datesReducer.dates
})

export default connect(App);