<template>
  <div class="navigator">
    <input v-model="apiToken" placeholder="Papercall API Token" v-on:keyup.enter="submit">
    <button v-on:click="submit">Load data</button>
    <div id="nav" v-if="isLoaded">
      <router-link to="/">Authors</router-link> |
      <router-link to="/languages">Languages</router-link> |
      <router-link to="/tags">Tags</router-link>
    </div>
    <router-view v-if="isLoaded"/>
    <div class="loading-spinner" v-if="isLoading">
      <atom-spinner
        :animation-duration="1000"
        :size="60"
        :color="'#7acfff'"
      />
    </div>
  </div>
</template>

<script>
import * as actions from '@/store/action-types'

import { AtomSpinner } from 'epic-spinners'

export default {
  name: 'navigator',
  components: {
    AtomSpinner
  },
  data () {
    return {
      apiToken: ''
    }
  },
  mounted () {
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    isLoaded () {
      return this.$store.getters.submissions.length !== 0 && this.$store.getters.event !== undefined
    }
  },
  methods: {
    submit () {
      this.$store.dispatch(actions.ACTION_INIT_PAPERCALL_TOKEN, {
        papercallToken: this.apiToken
      })
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
