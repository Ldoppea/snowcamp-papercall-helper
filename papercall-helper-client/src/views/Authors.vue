<template>
  <div class="authors-view">
    <h1>Authors</h1>

    <author v-for="author in submissionsByAuthor"
      :key="author.speakerName"
      :authorData="author"
      aknowledgeFeedback>
    </author>
  </div>
</template>

<script>
import submissionsHelpers from '@/helpers/submissions-helpers'
import Author from '@/components/Author'

export default {
  name: 'authors',
  components: {
    Author
  },
  data () {
    return {
    }
  },
  computed: {
    submissionsByAuthor () {
      const submissions = this.$store.getters.submissions

      const submissionsLight = submissions
        .map(submissionsHelpers.submissionToSubmissionLight)

      const submissionsByAuthor = submissionsHelpers.groupByAuthors(submissionsLight)
        .map(author => {
          return {
            ...author,
            media: author.submissions.flatMap(submission => submission.ratings)
                .flatMap(rating => rating.comments.split('\n'))
                .filter(commentLine => commentLine.startsWith('PreviousTalk: '))
                .map(commentLine => commentLine.replace('PreviousTalk: ', '')),
            noPreviousTalk: author.submissions.flatMap(submission => submission.ratings)
                .flatMap(rating => rating.comments.split('\n'))
                .some(commentLine => commentLine.startsWith('NoPreviousTalk'))
          }
        });

      console.log(submissionsByAuthor.filter(sub => sub.media.length > 0))

      return submissionsByAuthor
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
