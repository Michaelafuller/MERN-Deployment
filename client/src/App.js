import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
