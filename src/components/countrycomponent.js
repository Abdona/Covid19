/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './countrycomponent.module.css';
import flag from '../assets/country.svg';

const Country = (props) => (
  <Link to="/description" className={style.Link}>
    <div className={style.container1}>
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

export default Country;
