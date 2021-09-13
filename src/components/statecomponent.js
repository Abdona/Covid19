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
        <h3>
          {props.today_confirmed}
          {navarrowicon}
        </h3>
      </div>
    </div>

  );
};

export default State;
