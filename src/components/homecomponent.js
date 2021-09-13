import Country from './countrycomponent';
import style from './homecomponent.module.css';

const Home = () => (
  <div className={style.home}>
    <h1>Stats By Country</h1>
    <div className={style.container}>
      <Country class="even" country="Egypt" styleclass="container1" today_confirmed="383" />
      <Country class="odd" country="German" styleclass="container2" today_confirmed="69" />
      <Country class="odd" country="Italy" styleclass="container1" today_confirmed="9483" />
      <Country class="even" country="Spain" styleclass="container2" today_confirmed="655" />
    </div>
  </div>
);

export default Home;
