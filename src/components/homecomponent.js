/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchcoronabycountry } from '../utils/API';
import Country from './countrycomponent';
import style from './homecomponent.module.css';
import { addAction } from '../redux/home/home';

const Home = () => {
  const stat = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  const load = async () => {
    if (!stat.length) {
      await ['germany', 'spain', 'italy', 'france'].forEach(async (element) => {
        const resp = await fetchcoronabycountry(element);
        dispatch(addAction(resp));
      });
    }
  };
  useEffect(async () => {
    await load();
  }, []);
  const country = ['Germany', 'Spain', 'Italy', 'France'];
  const countryList = stat.map((obj) => {
    const curcountr = country.shift();
    return (
      <Country
        key={obj.dates['2020-03-22'].countries[curcountr].id}
        country={obj.dates['2020-03-22'].countries[curcountr].id}
        today_confirmed={obj.total.today_confirmed}
        nav
      />
    );
  });
  return (
    <div className={style.home}>
      <Country type="even" nav={false} country="Europe" styleclass="container1" today_confirmed="383" />
      <h3>STATS BY COUNTRY</h3>
      <div className={style.container}>
        {countryList}
      </div>
    </div>
  );
};

export default Home;
