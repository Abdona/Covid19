import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchcoronabycountry } from '../utils/API';
import Country from './countrycomponent';
import style from './homecomponent.module.css';
import { addAction } from '../redux/home/home';

const Home = () => {
  const stat = useSelector((state) => state.homeReducer);
  const country = ['Germany', 'Spain', 'Italy', 'France', 'Croatia'];
  const dispatch = useDispatch();
  const load = async () => {
    if (!stat.length) {
      country.forEach(async (element) => {
        const resp = await fetchcoronabycountry(element);
        dispatch(addAction(resp));
      });
    }
  };
  useEffect(async () => {
    await load();
  }, []);
  let casesSum = 0;
  const countryList = stat.map((obj) => {
    const currcont = Object.keys(obj.dates['2020-03-22'].countries);
    const cases = obj.dates['2020-03-22'].countries[currcont].today_confirmed;
    casesSum += cases;
    return (
      <Country
        key={obj.dates['2020-03-22'].countries[currcont].id}
        id={obj.dates['2020-03-22'].countries[currcont].id}
        country={obj.dates['2020-03-22'].countries[currcont].id}
        today_confirmed={cases}
        nav
      />
    );
  });
  const continent = (
    <Country
      key="Europe"
      country="Europe"
      today_confirmed={casesSum}
      nav={false}
    />
  );
  return (
    <div className={style.home}>
      <h3>Corona Statisitics</h3>
      {continent}
      <h3>STATS BY COUNTRY</h3>
      <div className={style.container}>
        {countryList}
      </div>
    </div>
  );
};

export default Home;
