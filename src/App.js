import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  userIsAuthenticated as Authenticated,
  userIsNotAuthenticated as NotAuthenticated
} from "./auth";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NotAuthenticated />
            <Link to="/App">Login</Link>
          </Route>
          <Route path="/App">
            <Authenticated />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
