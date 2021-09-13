import Country from './countrycomponent';

const Home = () => (
  <>
    <h1>Stats By Country</h1>
    <Country country="Egypt" styleclass="container1" today_confirmed="383" />
    <Country country="German" styleclass="container2" today_confirmed="69" />
    <Country country="Italy" styleclass="container1" today_confirmed="9483" />
    <Country country="Spain" styleclass="container2" today_confirmed="655" />
  </>
);

export default Home;
