<template>
  <div class="author">
    <div class="author-header">
      <span><b>{{ authorData.speakerName }}</b> ({{authorData.submissions.length}} submissions)</span>
      <span class="feedback-indicator" v-if="aknowledgeFeedback && authorData.hasFeedback">received Feedback</span>
    </div>
    <submission v-for="submission in authorData.submissions" :key="submission.id" :submissionData="submission"></submission>
  </div>
</template>

<script>
import Submission from '@/components/Submission'

export default {
  name: 'author',
  props: {
    authorData: Object,
    aknowledgeFeedback: Boolean
  },
  components: {
    Submission
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
.author {
  position: relative;
  margin: 20px 5px 5px 5px;

  .author-header {
    border-top: 1px solid #8b8b8b;
    border-left: 1px solid #8b8b8b;
    border-right: 1px solid #8b8b8b;
    background: #eeeeee;

    .feedback-indicator {
      display: block;
      float: right;
    }
  }
}
</style>
