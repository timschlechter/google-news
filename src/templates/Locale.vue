<template>
  <Layout>
    
    <div class="container-fluid">
      <div class="row">
      <topics-sidebar :node="$page.items.edges[0].node" />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          
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
    
  }
}
</script>



<page-query>
query($id: String!) {
  items: allTopics(filter: { localeId: { in: [$id]}}, order: DESC, limit: 1) {
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
}
</page-query>
