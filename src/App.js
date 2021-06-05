
import './App.css';
import { BrowserRouter as Router,  Route, } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

import { Header } from './components/Header';
import { UserDetail } from "./components/UserDetail";
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user/:Id" component={UserDetail} />
          <Route>404</Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
