// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  outputDir: 'docs',
  pathPrefix: '/google-news',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './data/**/google-news-rss.json',
        typeName: 'GoogleNews'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './data/**/topics.json',
        typeName: 'Topics'
      }
    },
  ],
  templates: {
    GoogleNews: '/:localeId_raw/:year/:month/:day/:topicId',
    Locale: '/:id',
  }
  
}


