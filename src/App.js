import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/homecomponent';
import Details from './components/detailscomponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/description/:country">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
