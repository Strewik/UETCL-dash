import React from "react";
import axios from "axios";
import NewProject from "./components/NewProject";
import EditProject from "./components/EditProject";
import DisplayData from "./components/DisplayData";
import uetcllogo2 from "./images/uetcllogo2.jpg";
import styles from "./components/styles.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

export default class App extends React.Component {
  state = {
    redirect: true
  };

  updateProject = item => {
    axios
      .put(`/api/dates/${item.id}/`, item)
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
      <Router>
        <div className="App">
          <div className={styles.mainHeader}>
            <img src={uetcllogo2} alt={"logo"} />
          </div>
          <Switch>
            <Route path="/" exact component={DisplayData} />
            <Route path="/newproject" component={NewProject} />
            <Route
              path="/editproject/:id"
              render={props => (
                <EditProject {...props} updateProject={this.updateProject} />
              )}
            />
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
