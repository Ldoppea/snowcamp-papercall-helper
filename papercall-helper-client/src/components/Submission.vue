<template>
  <div class="submission" :class="(submissionData.isConference? 'conference' : 'university')">
    <a class="submission-link" :href="'https://www.papercall.io/cfps/1343/submissions/' + submissionData.id">{{submissionData.talkName}}</a>
    <span class="submission-format"> : {{submissionData.isConference ? 'Conférence' : 'Université'}}</span>
    <div class="languages" v-if="showLanguages && submissionData.languages !== undefined && submissionData.languages.length > 0">
      <span v-for="language in submissionData.languages" :key="language" :class="'language-' + language" >
        {{language}}
      </span>
    </div>
    <div class="languages" v-else-if="showLanguages">
      <span class="language-undefined" >NO LANGUAGE SET</span>
    </div>
    <div class="tags" v-if="showTags">
      <span v-for="tag in submissionData.tags" :key="tag" :class="'tag tag-' + tag" >
        {{tag}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'submission',
  props: {
    submissionData: Object,
    showTags: Boolean,
    showLanguages: Boolean
  },
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
      background: #82c3ff;
    }

    .language-English {
      background: #dfffa3;
    }

    .language-undefined {
      background: red;
    }
  }

  .tags {
    margin-top: 5px;
    .tag {
      background: #cfe8ff;
      margin-right: 10px;
    }
  }
}
.university {
  color: #fffb00;
}
.conference {
  color: #008bff;
}
</style>
