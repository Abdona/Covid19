import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import style from './countrycomponent.module.css';
import flag from '../assets/country.svg';
import { addAction } from '../redux/details/details';
import navarrow from '../assets/right-arrow.svg';
import capitalizeFirstLetter from '../utils/capitalizeFirstletter';

const Country = (props) => {
  const dispatch = useDispatch();
  const handleaction = (event) => {
    dispatch(addAction(capitalizeFirstLetter(event.target.id)));
  };
  const {
    type, nav, country, countryState, today_confirmed: todayConfirmed, id,
  } = props;
  // console.log(countryState);
  const stylex = type === 'even' ? style.country1 : style.country2;
  let navarrowicon = '';
  if (nav) {
    navarrowicon = (
      <Link to={{ pathname: `/description/${id}`, state: countryState }} className={style.Link}>
        <button type="button" id={id} onClick={handleaction}>
          <img src={navarrow} id={id} alt="navarrow" />
          {' '}
        </button>
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

Country.propTypes = { type: PropTypes.string }.isRequired;

export default Country;
