/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
  Link,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import State from './statecomponent';
import Country from './countrycomponent';
import { fetchcoronabycountry } from '../utils/API';
import style from './detailscomponent.module.css';
import backarrow from '../assets/back-arrow.svg';
import { addAction } from '../redux/details/regions';
import capitalizeFirstLetter from '../utils/capitalizeFirstletter';

const Details = () => {
  let stateList;
  const stat = useSelector((state) => state.detailsReducer);
  const regionStat = useSelector((state) => state.regionsReducer);
  const dispatch = useDispatch();
  const currcont = capitalizeFirstLetter(stat[stat.length - 1]);
  const load = async () => {
    const resp = await fetchcoronabycountry(currcont);
    dispatch(addAction(resp));
  };
  useEffect(async () => {
    await load();
  }, []);
  if (regionStat.length) {
    const { regions } = regionStat[regionStat.length - 1].dates['2020-03-22'].countries[currcont];
    stateList = regions.map((obj) => (
      <State
        key={obj.id}
        type="even"
        nav
        country={obj.name}
        styleclass="container1"
        today_confirmed={obj.today_confirmed}
      />
    ));
  }
  return (
    <div className={style.home}>
      <Link exact to="/">
        <img src={backarrow} alt="backarrow" className={style.backarrow} />
      </Link>
      <Country type="even" nav={false} country={currcont} styleclass="container1" today_confirmed="383" />
      <h3>CITY/TOWN BREAKDOWN</h3>
      <div className={style.container}>
        {stateList}
      </div>
    </div>
  );
};

export default Details;
