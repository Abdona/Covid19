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

const Details = () => {
  const stat = useSelector((state) => state.detailsReducer);
  const countries = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const currcont = stat[stat.length - 1];
  const selectedCountry = countries.filter((country) => Object.keys(country.dates['2020-03-22'].countries)[0] === currcont);
  const { regions } = selectedCountry[0].dates['2020-03-22'].countries[currcont];
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
      <Country type="even" nav={false} country={currcont} styleclass="container1" today_confirmed="383" />
      <h3>CITY/TOWN BREAKDOWN</h3>
      <div className={style.container}>
        {stateList}
      </div>
    </div>
  );
};

export default Details;
