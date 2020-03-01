<template>
  <div class="search-page">
    <h1>This is an search page</h1>
    <form @submit.prevent="fetchData">
      <input v-model="searchStr" />
      <button type="submit">Search</button>
    </form>
    <p v-if="loading">Loading...</p>
    <template v-else>
      <div v-for="item in results" :key="item.id">{{item}}</div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
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
