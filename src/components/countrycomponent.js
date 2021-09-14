/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './countrycomponent.module.css';
import flag from '../assets/country.svg';
import navarrow from '../assets/right-arrow.svg';

const Country = (props) => {
  const {
    type, nav, country, today_confirmed: todayConfirmed,
  } = props;
  const stylex = type === 'even' ? style.country1 : style.country2;
  let navarrowicon = '';
  if (nav) {
    navarrowicon = (
      <Link to="/description" className={style.Link}>
        <img src={navarrow} alt="navarrow" />
      </Link>
    );
  }
  return (

    <div className={stylex}>
      <div className={style.imgcont}>
        <img src={flag} alt={country} />
        {navarrowicon}
      </div>
      <div className={style.textcont}>
        <h1>
          {country}
        </h1>
        <h3>
          {todayConfirmed}
        </h3>
      </div>
    </div>

  );
};

export default Country;
