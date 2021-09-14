/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import style from './statecomponent.module.css';
import navarrow from '../assets/right-arrow.svg';

const State = (props) => {
  const stylex = props.class === 'even' ? style.state1 : style.state2;
  let navarrowicon = '';
  if (props.nav) {
    navarrowicon = (
      <img src={navarrow} alt="navarrow" />
    );
  }
  return (

    <div className={stylex}>
      <div className={style.textcont}>
        <h1>
          {props.country}
        </h1>
        <div>
          <h3>
            {props.today_confirmed}
          </h3>
          <span>
            {navarrowicon}
          </span>
        </div>
      </div>
    </div>

  );
};

export default State;
