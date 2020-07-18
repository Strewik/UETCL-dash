import React from "react";
import axios from "axios";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";
import DisplayData from "./components/DisplayData";
import Project from "./components/Project";
import ProjectLanding from "./components/ProjectLanding";
import EditProject from "./components/EditProject";

import uetcllogo2 from "./images/uetcllogo2.jpg";

import styles from "./components/styles.module.css";
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

  updateProject = item => {
    axios
      .put(`http://localhost:8000/api/dates/${item.id}/`, item)
      .then(res => {
        this.setState({ items: res.data });
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
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
        <div className="App">
          <div className={styles.mainHeader}>
            <img src={uetcllogo2} alt={"logo"} />
          </div>
          <Switch>
            {/* <Route path="/" exact component={EditProject} /> */}
            <Route path="/" exact component={DisplayData} />
            <Route path="/newproject" component={NewProject} />
            <Route
              path="/editproject/:id"
              render={props => (
                <EditProject {...props} updateProject={this.updateProject} />
              )}
            />
            <Route path="/clock" component={Clock} />
            <Route path="/counter" component={Counter} />
            <Route path="/project" component={Project} />
            <Route path="/landing" component={ProjectLanding} />
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
      // {/* </Provider> */}
    );
  }
}

export default App;
