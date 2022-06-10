import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import "./Navbar.css";
import Body from "./Body";
import Individual from "./Individual";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Business from "./Business";
import Buy from "./Buy";
import Sell from "./Sell";
import Welcome from "./Welcome";
import Final from "./Final";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
        </Switch>

        <Switch>
          <Route path="/individual">
            <Individual />
          </Route>
        </Switch>

        <Switch>
          <Route path="/business">
            <Business />
          </Route>
        </Switch>

        <Switch>
          <Route path="/buy">
            <Buy />
          </Route>
        </Switch>

        <Switch>
          <Route path="/sell">
            <Sell />
          </Route>
        </Switch>

        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Switch>

        <Switch>
          <Route path="/final">
            <Final />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
