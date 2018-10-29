<template>
  <div class="navigator">
    <input v-model="apiToken" placeholder="Papercall API Token" v-on:keyup.enter="submit">
    <input v-model="emailAddress" placeholder="Email address" v-on:keyup.enter="submit">
    <button v-on:click="submit">Load data</button>
    <br />
    <label for="filterEmail">Filter rated by you</label>
    <input type="checkbox" id="filterEmail" v-model="filterByEmail">
    <div id="nav" v-if="isLoaded">
      <router-link to="/">Authors</router-link> |
      <router-link to="/languages">Languages</router-link> |
      <router-link to="/tags">Tags</router-link> |
      <router-link to="/travelers">Travelers</router-link>
    </div>
    <router-view v-if="isLoaded"/>
    <div class="loading-spinner" v-if="isLoading">
      <atom-spinner
        :animation-duration="1000"
        :size="40"
        :color="'#FF0000'"
      />
    </div>
  </div>
</template>

<script>
import * as actions from '@/store/action-types'
import * as mutations from '@/store/mutation-types'

import { AtomSpinner } from 'epic-spinners'

export default {
  name: 'navigator',
  components: {
    AtomSpinner
  },
  data () {
    return {
      apiToken: '',
      emailAddress: ''
    }
  },
  mounted () {
    this.apiToken = localStorage.getItem('PAPERCALL_TOKEN')
    this.emailAddress = localStorage.getItem('PAPERCALL_EMAIL')
  },
  computed: {
    isLoading () {
      return this.$store.getters.isLoading
    },
    isLoaded () {
      return this.$store.getters.submissions.length !== 0 && this.$store.getters.event !== undefined
    },
    filterByEmail: {
      get () {
        return this.$store.getters.filterByEmail
      },
      set (value) {
        this.$store.commit(mutations.SET_EMAIL_FILTER, value)
      }
    }
  },
  methods: {
    submit () {
      localStorage.setItem('PAPERCALL_TOKEN', this.apiToken)
      localStorage.setItem('PAPERCALL_EMAIL', this.emailAddress)
      this.$store.dispatch(actions.ACTION_INIT_PAPERCALL_TOKEN, {
        papercallToken: this.apiToken,
        papercallEmail: this.emailAddress
      })
    }
  }
}
</script>

<style lang="scss">
.loading-spinner {
  position: absolute;
  left: 50%;
  top: 10px;
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
