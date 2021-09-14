import Country from './countrycomponent';
import style from './homecomponent.module.css';

const Home = () => (
  <div className={style.home}>
    <Country type="even" nav={false} country="Europe" styleclass="container1" today_confirmed="383" />
    <h3>STATS BY COUNTRY</h3>
    <div className={style.container}>
      <Country type="even" nav country="Egypt" styleclass="container1" today_confirmed="383" />
      <Country type="odd" nav country="Germany" styleclass="container2" today_confirmed="69" />
      <Country type="odd" nav country="Italy" styleclass="container1" today_confirmed="9483" />
      <Country type="even" nav country="Spain" styleclass="container2" today_confirmed="655" />
    </div>
  </div>
);

export default Home;
