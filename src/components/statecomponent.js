import PropTypes from 'prop-types';
import style from './statecomponent.module.css';
import navarrow from '../assets/right-arrow.svg';

const State = (props) => {
  const {
    type,
    nav,
    country,
    today_confirmed: todayConfirmed,
  } = props;
  const stylex = type === 'even' ? style.state1 : style.state2;
  let navarrowicon = '';
  if (nav) {
    navarrowicon = (
      <img src={navarrow} alt="navarrow" />
    );
  }
  return (

    <div className={stylex}>
      <div className={style.textcont}>
        <h1>
          {country}
        </h1>
        <div>
          <h3>
            {todayConfirmed}
          </h3>
          <span>
            {navarrowicon}
          </span>
        </div>
      </div>
    </div>

  );
};

State.propTypes = { type: PropTypes.string }.isRequired;

export default State;
