import React from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import NewProject from "./components/NewProject";
import DisplayData from "./components/DisplayData";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import store from "./store";
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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/clock" component={Clock} />
              <Route path="/newproject" component={NewProject} />
              <Route path="/counter" component={Counter} />
              <Route path="/display" component={DisplayData} />
              <Route component={notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
