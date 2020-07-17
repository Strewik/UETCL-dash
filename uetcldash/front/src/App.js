import React from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import NewProject from "./components/NewProject";
import DisplayData from "./components/DisplayData";
import Project from "./components/Project";
import ProjectLanding from "./components/ProjectLanding";
import EditProject from "./components/EditProject";

import uetcllogo2 from "./images/uetcllogo2.jpg";

import styles from "./components/styles.module.css";
// import Landing from "./components/Landing";
// import { Provider } from "react-redux";
// import store from "./store";
// import history from './components/history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  state = {
    redirect: true
  };

  render() {
    const notfound = () => {
      const { redirect } = this.state;
      if (redirect) {
        return <Redirect to="/newproject" />;
      }
    };
    return (
      // <Provider store={store}>
      <Router>
        <div className="MainApp">
          <div>
            <div className={styles.mainHeader}>
              <img src={uetcllogo2} alt={"logo"} />
            </div>
          </div>
          <Switch>
            <Route path="/" exact component={EditProject} />
            {/* <Route path="/" exact component={DisplayData} /> */}
            <Route path="/newproject" component={NewProject} />
            <Route path="/clock" component={Clock} />
            <Route path="/counter" component={Counter} />
            <Route path="/project" component={Project} />
            <Route path="/landing" component={ProjectLanding} />
            {/* <Route path="/landing" component={ Landing} /> */}
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
      // {/* </Provider> */}
    );
  }
}

export default App;
