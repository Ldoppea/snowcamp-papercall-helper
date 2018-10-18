<template>
  <div class="media">
    <iframe width="200" height="112" :src="embedUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'media',
  props: {
    url: String
  },
  data () {
    return {
    }
  },
  computed: {
    embedUrl() {
      return this.url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.media {
  display: inline-block;
  margin-right: 5px;
}
</style>
