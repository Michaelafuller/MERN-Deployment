import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import SessionDashboard from './components/SessionDashboard';
import TransactionPage from './components/TransactionPage';
import InvoicePage from './components/InvoicePage';
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
        <Route exact path={"/transaction-page"}>
          <TransactionPage />
        </Route>
        <Route exact path={"/invoice-page"}>
          <InvoicePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
