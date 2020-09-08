import React, { Component, Fragment } from "react";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";
import DisplayData from "./components/DisplayData";
import uetcllogo2 from "./images/uetcllogo2.jpg";
import styles from "./components/styles.module.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Register from "./components/accounts/Register";
import Login from "./components/accounts/Login";
import PrivateRoute from "./components/common/PrivateRoute";
import Headers from "./components/layout/Headers";
import Alerts from "./components/layout/Alerts";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

const alertOptions = {
  timeout: 3000,
  position: "top center"
};

export default class App extends Component {
  state = {
    redirect: true
  };

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    const notfound = () => {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/newproject" />;
      }
    };
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <div className="App">
                <div className={styles.mainHeader}>
                  <img src={uetcllogo2} alt={"logo"} />
                </div>
                <Headers />
                <Alerts />
                <Switch>
                  <Route path="/" exact component={Login} />
                  <Route path="/register" exact component={Register} />
                  <PrivateRoute path="/display" exact component={DisplayData} />
                  <PrivateRoute path="/newproject" component={NewProject} />
                  <PrivateRoute
                    path="/editproject/:id"
                    component={EditProject}
                  />
                  <Route component={notfound} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}
