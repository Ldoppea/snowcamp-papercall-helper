<template>
  <div class="author">
    <div class="author-header">
      <span><b>{{ authorData.speakerName }}</b> ({{authorData.submissions.length}} submissions)</span>
      <span class="feedback-indicator" v-if="aknowledgeFeedback && authorData.hasFeedback">received Feedback</span>
    </div>
    <submission v-for="submission in authorData.submissions" :key="submission.id" :submissionData="submission" :showTags="showTags" :showLanguages="showLanguages"></submission>
    
    <div class="media-container" v-if="authorData.media && authorData.media.length > 0">
      <media v-for="media in authorData.media" :key="media.id" :url="media"></media>
    </div>
  </div>
</template>

<script>
import Submission from '@/components/Submission'
import Media from '@/components/Media'

export default {
  name: 'author',
  props: {
    authorData: Object,
    aknowledgeFeedback: Boolean,
    showTags: Boolean,
    showLanguages: Boolean
  },
  components: {
    Submission,
    Media
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
    padding: 5px 5px 5px 5px;

    .feedback-indicator {
      display: block;
      float: right;
    }
  }

  .media-container {
    background: #cccccc;
    border: 1px solid #8b8b8b;
    padding: 5px;
  }
}
</style>
