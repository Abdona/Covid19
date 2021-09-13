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
        <Route path="/description">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
