const getGoogleNewsArticles = require('./get-google-news-rss');
const getTopics = require('./get-topics');
const fs = require("fs");
const getNowDate = require("./get-now-date");

const localeOptions = {
  'nl-NL': { hl: 'nl-NL', gl: 'NL', ceid: 'NL:nl' },
  'en-US': { hl: 'en-US', gl: 'US', ceid: 'US:en' },
};

const localeIds = Object.keys(localeOptions);

(async () => {
  const now = getNowDate();

  for (let l = 0; l < localeIds.length; l++) {
    const localeId = localeIds[l];

    const timestamp = now.toISOString().replace(/[^\d]/g, '');
    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(4, 6);
    const day = timestamp.substring(6, 8);
    
    const topics = await getTopics(localeId);

    const metaData = {
      localeId,
      date: now,
    };

    let foundTopics = [];
    
    const processTopics = topics.map(async topic => {  
      const rss = await getGoogleNewsArticles(topic.title, localeOptions[localeId]);

      if (rss.item) {
        foundTopics.push(topic);
        const dir = `./data/${localeId}/${year}/${month}/${day}/topics/${topic.id}`
        fs.mkdirSync(dir, { recursive: true });
        
        const fileName = `google-news-rss.json`;
        const path = `${dir}/${fileName}`;
        fs.writeFileSync(path, JSON.stringify({
          ...metaData,
          topicId: topic.id,
          rss
        }));
      }
    });

    await Promise.all(processTopics);

    // Store topics.json
    const topicsDir = `./data/${localeId}/${year}/${month}/${day}`
    fs.mkdirSync(topicsDir, { recursive: true });
    fs.writeFileSync(`${topicsDir}/topics.json`, JSON.stringify({
      ...metaData,
      topics: foundTopics,
    }));
    
  }

  fs.writeFileSync('./data/locales.json', JSON.stringify(localeIds.map(id => ({ id }))));
})();
