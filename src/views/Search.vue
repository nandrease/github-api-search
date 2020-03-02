<template>
  <div class="search-page">
    <h1 class="main-title">Search for GitHub repositories</h1>
    <md-content class="flex-center">
      <form @submit.prevent="fetchData" class="form-inline">
        <md-field md-inline md-clearable>
          <md-icon>search</md-icon>
          <label>Search Github Repos</label>
          <md-input v-model="searchStr" type="text" class="md-accent"></md-input>
        </md-field>
        <md-button type="submit" class="md-raised md-accent">Search</md-button>
      </form>
    </md-content>
    <template v-if="loading">
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </template>
    <template v-else>
      <card-comp
        v-for="item in results"
        :key="item.id"
        :item="item"
      ></card-comp>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import CardComp from '@/components/CardComp.vue'

export default {
  name: 'Search',
  components: {
    CardComp
  },
  data () {
    return {
      searchStr: '',
      loading: false,
      results: []
    }
  },
  methods: {
    fetchData () {
      if (this.searchStr.length) {
        this.loading = true
        const url = `https://api.github.com/search/repositories?q=${this.searchStr}`
        axios
          .get(url)
          .then(response => {
            this.loading = false
            this.results = response.data.items
          })
          .catch(e => console.log(`ERROR: ${e}`))
      } else {
        this.results = []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-inline {
  display: flex;
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
}
</style>
