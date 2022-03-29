import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SessionDashboard from './components/SessionDashboard';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Dashboard />
        </Route>
        <Route exact path={"/session"}>
          <SessionDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
