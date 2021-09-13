/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './countrycomponent.module.css';
import flag from '../assets/country.svg';
import navarrow from '../assets/right-arrow.svg';

const Country = (props) => {
  const stylex = props.class === 'even' ? style.country1 : style.country2;
  let navarrowicon = '';
  if (props.nav) {
    navarrowicon = (
      <Link to="/description" className={style.Link}>
        <img src={navarrow} alt="navarrow" />
      </Link>
    );
  }
  return (

    <div className={stylex}>
      <div className={style.imgcont}>
        <img src={flag} alt={props.country} />
        {navarrowicon}
      </div>
      <div className={style.textcont}>
        <h1>
          {props.country}
        </h1>
        <h3>
          {props.today_confirmed}
        </h3>
      </div>
    </div>

  );
};

export default Country;
