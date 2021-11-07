const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

module.exports = async (topic, options) => {
  const qsParams = { ...options, q: topic };
  const qs = Object.keys(qsParams)
    .map((key) => `${key}=${encodeURI(qsParams[key])}`)
    .join('&');
  const url = `https://news.google.com/rss/search?${qs}`;
  
  const response = await axios.get(url);
  console.log(`${url} ${response.status}`);

  const xml = response.data;
  const json = await parser.parseStringPromise(xml);

  return json.rss.channel[0];
};
