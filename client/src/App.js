import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cases from "./routes/Cases";
import Home from "./routes/Home";
import News from "./routes/News";
import VaccNews from "./routes/VaccNews";
import CovNews from "./routes/CovNews";
import Test from "./routes/Test";
import SignUp from "./routes/Register";
import SignIn from "./routes/SignIn";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();

export default function App() {
  const [verified, setVerified] = useState(false);

  function setv(boolean) {
    setVerified(boolean);
  }

  useEffect(() => {
    check();
  }, []);

  function check() {
    axios.get("http://localhost:4000/checkUser").then((res) => {
      setVerified(res.data.auth);
    });
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/News" component={News} />
        <Route path="/Cases" component={Cases} />
        <Route path="/VaccNews" component={VaccNews} />
        <Route path="/CovNews" component={CovNews} />
        <Route
          path="/test"
          render={(props) =>
            verified ? <Test /> : <Redirect to="/Register" />
          }
        />
        <Route
          path="/Register"
          render={(props) =>
            verified ? (
              <Redirect to="/test" />
            ) : (
              <SignUp {...props} setv={setv} />
            )
          }
        />
        <Route
          path="/SignIn"
          render={(props) =>
            verified ? (
              <Redirect to="/test" />
            ) : (
              <SignIn {...props} setv={setv} />
            )
          }
        />
      </Switch>
    </Router>
  );
}
