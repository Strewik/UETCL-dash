import React from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import NewProject from "./components/NewProject";
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
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={NewProject} />
            <Route path="/clock" component={Clock} />
            <Route path="/counter" component={Counter} />
            <Route component={notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

