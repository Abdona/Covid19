import {
  Link, useLocation,
} from 'react-router-dom';
import State from './statecomponent';
import Country from './countrycomponent';
import style from './detailscomponent.module.css';
import backarrow from '../assets/back-arrow.svg';

const Details = () => {
  const location = useLocation();
  const selectedCountry = location.state;
  const selectedCountryname = Object.keys(selectedCountry.dates['2020-03-22'].countries);
  const { regions } = selectedCountry.dates['2020-03-22'].countries[selectedCountryname];
  const stateList = regions.map((obj) => (
    <State
      key={obj.id}
      type="even"
      nav
      country={obj.name}
      styleclass="container1"
      today_confirmed={obj.today_confirmed}
    />
  ));
  return (
    <div className={style.home}>
      <Link exact to="/">
        <img src={backarrow} alt="backarrow" className={style.backarrow} />
      </Link>
      <Country type="even" nav={false} country={selectedCountryname} styleclass="container1" today_confirmed={selectedCountry.dates['2020-03-22'].countries[selectedCountryname].today_confirmed} />
      <h3>CITY/TOWN BREAKDOWN</h3>
      <div className={style.container}>
        {stateList}
      </div>
    </div>
  );
};

export default Details;
