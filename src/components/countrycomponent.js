/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './countrycomponent.module.css';
import flag from '../assets/country.svg';
import navarrow from '../assets/right-arrow.svg';

const Country = (props) => {
  const stylex = props.class === 'even' ? style.country1 : style.country2;
  return (
    <Link to="/description" className={style.Link}>
      <div className={stylex}>
        <img src={navarrow} alt="navarrow" />
        <img src={flag} alt={props.country} />
        <h1>
          {props.country}
        </h1>
        <h3>
          {props.today_confirmed}
        </h3>
      </div>
    </Link>
  );
};

export default Country;
