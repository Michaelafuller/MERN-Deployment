import './App.css';
import Dashboard from './components/Dashboard';
import SessionDashboard from './components/SessionDashboard';
import TransactionPage from './components/TransactionPage';
import InvoicePage from './components/InvoicePage';
import Receipt from './components/Receipt';
import CloseoutPage from './components/CloseoutPage';
import NewSupply from './components/NewSupply.jsx'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"}>
          <Dashboard />
        </Route>
        <Route exact path={"/session/:standId"}>
          <SessionDashboard />
        </Route>
        <Route exact path={"/transaction-page"}>
          <TransactionPage />
        </Route>
        <Route exact path={"/invoice-page"}>
          <InvoicePage />
        </Route>
        <Route exact path={"/receipt"}>
          <Receipt />
        </Route>
        <Route exact path={"/closeout/:id"}>
          <CloseoutPage />
        </Route>
        <Route exact path={"/add-supply"}>
          <NewSupply />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
