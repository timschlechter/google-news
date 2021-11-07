<template>
  <Layout>
    <div class="container-fluid">
      <div class="row">
        <topics-sidebar :node="$page.topics.edges[0].node" :activeTopicId="$route.params.topic" />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <google-news :node="$page.items.edges[0].node" />
        </main>
      </div>
    </div>
  </Layout>
</template>

<script>
import GoogleNews from '~/components/GoogleNews.vue'
import TopicsSidebar from '~/components/TopicsSidebar.vue'
export default {
  components: {
    GoogleNews, 
    TopicsSidebar
    
  },

}
</script>


<page-query>
query($localeId: String!, $topicId: String!, $date: Date!) {
   topics: allTopics(filter: { localeId: { in: [$localeId]} }, order: DESC, limit: 1) {
    edges {
      node {
        id
        localeId
        date
        topics {
          id
          title
        }
      }
    }
  }  
  items: allGoogleNews(filter: { 
    localeId: { in: [$localeId] }, 
    topicId: { in: [$topicId]},
    date: { dteq: $date }
  }) {
    edges {
      node {
        id
        rss {
          item {
            title
            link
            description
            guid {
              _
            }
          }
        }
      }
    }
  }  
}
</page-query>
