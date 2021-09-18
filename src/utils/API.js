const fetch = require('cross-fetch');

export const fetchcoronbydate = async () => {
  const resp = await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-22');
  const respobj = await resp.json();
  return respobj;
};

export const fetchcoronabycountry = async (country) => {
  const resp = await fetch(`https://api.covid19tracking.narrativa.com/api/2020-03-22/country/${country}`);
  const respobj = await resp.json();
  return respobj;
};
