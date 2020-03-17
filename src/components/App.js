import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import Index from "./Index";
import Lyrics from "./lyrics/Lyrics";
import { Provider } from "./contaxt/Contaxt";

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container-sm mainCont">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
