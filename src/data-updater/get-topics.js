const axios = require('axios');
const { parse } = require('node-html-parser');
const friendlyUrl = require('./friendly-url');

const localeCountries = {
  'nl-NL': 'netherlands',
  'en-US': 'united-states'
};

module.exports = async (localeId) => {
  const url = `https://getdaytrends.com/${localeCountries[localeId]}/23/`;
  
  const response = await axios.get(url);
  console.log(`${url} ${response.status}`);


  const html = response.data;

  const root = parse(html);

  const trs = root.querySelectorAll('table.trends > tbody > tr > td.main > a');

  return trs.map(tr => tr.text.replace(/#/g, '')).map(topic => ({
    id: friendlyUrl(topic),
    title: topic
  }));
}