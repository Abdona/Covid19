import {
  Link,
} from 'react-router-dom';
import State from './statecomponent';
import Country from './countrycomponent';
import style from './detailscomponent.module.css';
import backarrow from '../assets/back-arrow.svg';

const Details = () => (
  <div className={style.home}>
    <Link exact to="/">
      <img src={backarrow} alt="backarrow" className={style.backarrow} />
    </Link>
    <Country class="even" nav={false} country="Germany" styleclass="container1" today_confirmed="383" />
    <h3>CITY/TOWN BREAKDOWN</h3>
    <div className={style.container}>
      <State class="even" nav country="Munich" styleclass="container1" today_confirmed="383" />
      <State class="odd" nav country="Hamburg" styleclass="container2" today_confirmed="69" />
      <State class="even" nav country="Berlin" styleclass="container1" today_confirmed="9483" />
      <State class="odd" nav country="Koln" styleclass="container2" today_confirmed="655" />
    </div>
  </div>
);

export default Details;
