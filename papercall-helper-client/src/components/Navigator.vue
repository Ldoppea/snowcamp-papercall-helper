<template>
  <div class="navigator">
    <div id="nav" v-if="isLoaded">
      <router-link to="/">Authors</router-link> |
      <router-link to="/languages">Languages</router-link> |
      <router-link to="/tags">Tags</router-link>
    </div>
    <router-view v-if="isLoaded"/>
    <div class="loading-spinner" v-if="!isLoaded">
      <atom-spinner
        :animation-duration="1000"
        :size="60"
        :color="'#7acfff'"
      />
    </div>
  </div>
</template>

<script>
import * as mutations from '@/store/mutation-types'

import PapercallService from '@/services/papercall-service'

import { AtomSpinner } from 'epic-spinners'

export default {
  name: 'navigator',
  components: {
    AtomSpinner
  },
  mounted () {
    this.getSubmissions()
    this.getEvent()
  },
  computed: {
    isLoaded () {
      return this.$store.getters.submissions.length !== 0
    }
  },
  methods: {
    async getSubmissions () {
      console.log('reload submissions')
      if (this.$store.getters.submissions.length === 0) {
        console.log('load submissions')
        const response = await PapercallService.fetchSubmissions()

        this.$store.commit(mutations.INIT_SUBMISSIONS, {
          submissions: response.data
        })
      }
    },
    async getEvent () {
      console.log('reload event')
      if (this.$store.getters.event === undefined) {
        console.log('load event')
        const response = await PapercallService.fetchEvent()

        this.$store.commit(mutations.INIT_EVENT, {
          event: response.data
        })
      }
    }
  }
}
</script>

<style lang="scss">
.loading-spinner {
  position: absolute;
  left: 50%;
  top: 50%;
}
#nav {
  text-align: left;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
