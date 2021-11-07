<template>
  <div class="card-columns">
    <b-card v-for="item in node.rss.item" :key="item.guid._"
      :title="item.title[0]"
      class="mt-2 card"
    >
      <b-card-text v-html="item.description[0]" />
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'GoogleNews',
  props: ['node']
}
</script>

<style>

.card {
    display: inline-block;

}
@media (min-width: 576px) { .card-columns {    column-count: 1;    }  }
@media (min-width: 768px) { .card-columns {    column-count: 2;    }   }
@media (min-width: 992px) { .card-columns {    column-count: 3;    }   }
@media (min-width: 1200px) { .card-columns {    column-count: 4;    }  }

</style>