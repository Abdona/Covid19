import { useEffect } from 'react';
import Mockedcountry from './mockedCountry';
import style from './homecomponent.module.css';
import mockedApi from './mockedAPI';
import mockedStore from './mockedSTORE';

const Mockedhome = () => {
  const stat = mockedStore();
  const load = () => {
    if (!stat.length) {
      const resp = mockedApi(mockedApi());
      mockedStore(stat, resp, 'addTostore');
    }
  };
  useEffect(async () => {
    load();
  }, []);
  let casesSum = 0;
  const countryList = stat.map((obj) => {
    const currcont = Object.keys(obj.dates['2020-03-22'].countries);
    const cases = obj.dates['2020-03-22'].countries[currcont].today_confirmed;
    casesSum += cases;
    return (
      <Mockedcountry
        key={obj.dates['2020-03-22'].countries[currcont].id}
        id={obj.dates['2020-03-22'].countries[currcont].id}
        country={obj.dates['2020-03-22'].countries[currcont].id}
        today_confirmed={cases}
        nav
      />
    );
  });
  const continent = (
    <Mockedcountry
      key="Europe"
      country="Europe"
      today_confirmed={casesSum}
      nav={false}
    />
  );
  return (
    <div className={style.home} data-testid="homepage">
      {continent}
      <h3>STATS BY COUNTRY</h3>
      <div className={style.container}>
        {countryList}
      </div>
    </div>
  );
};

export default Mockedhome;
