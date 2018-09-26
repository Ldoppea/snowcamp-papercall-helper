<template>
  <div class="submission">
    <a class="submission-link" :href="'https://www.papercall.io/cfps/1343/submissions/' + submissionData.id">{{submissionData.talkName}}</a>
    <div class="languages" v-if="submissionData.languages !== undefined && submissionData.languages.length > 0">
      <span v-for="language in submissionData.languages" :key="language" :class="'language-' + language" >
        {{language}}
      </span>
    </div>
    <div class="languages" v-else>
      <span class="language-undefined" >NO LANGUAGE SET</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submission',
  props: ['submissionData'],
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
.submission {
  position: relative;

  padding: 5px;

  border: 1px solid #8b8b8b;
  background: #cccccc;

  .languages {
    position: relative;
    float: right;

    .language-French {
      background: rgb(130, 195, 255);
    }

    .language-English {
      background: #dfffa3;
    }

    .language-undefined {
      background: red;
    }
  }
}
</style>
