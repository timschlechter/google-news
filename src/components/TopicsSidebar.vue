<template>
  <nav class="nav-pills nav-fill col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="sidebar-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item" v-for="topic in node.topics" :key="topic.id">
            <g-link :to="topicUrl(node, topic.id)">
              {{topic.title}}
            </g-link>
          </li>
        </ul>
      </div>
      </nav>
</template>

<script>
export default {
  name: 'TopicsSidebar',
  props: ['node', 'activeTopicId'],
  methods: {
    topicUrl(node, topicId) {
      const { date, localeId} = node;
      
      return `/${localeId}/${date.substring(0,4)}/${date.substring(5,7)}/${date.substring(8,10)}/${topicId}`;
    }
  }
}
</script>

<style>

</style>