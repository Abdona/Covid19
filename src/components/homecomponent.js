// import {
//   Link,
// } from 'react-router-dom';
import Country from './countrycomponent';

const Home = () => (
  <>
    <h1>Stats By Country</h1>
    <Country country="Egypt" today_confirmed="383" />
    <Country country="German" today_confirmed="69" />
    <Country country="Italy" today_confirmed="9483" />
    <Country country="Spain" today_confirmed="655" />
  </>
);

export default Home;
