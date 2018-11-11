<template>
  <div class="authors-view">
    <h1>Authors</h1>

    <div>
      <div v-for="status in statusList" :key="status.name">
        <input type="checkbox" :name="'checkbox-status-' + status.name" @click="clickCb(status)" :checked="status.value"/>
        <label :for="'checkbox-status-' + status.name">{{status.name}}</label>
      </div>
    </div>

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
import * as mutations from '@/store/mutation-types'

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
            media: submissionsHelpers.getSubmissionsTagContent(author.submissions, 'PreviousTalk'),
            noPreviousTalk: submissionsHelpers.getSubmissionsTagPresence(author.submissions, 'NoPreviousTalk'),
            warnings: submissionsHelpers.getSubmissionsTagContent(author.submissions, 'Warning')
              .map((warning, index) => {
                return {
                  id: index,
                  value: warning
                }
              })
          }
        })

      return submissionsByAuthor
    },
    statusList () {
      return this.$store.getters.filterStatus
    }
  },
  mounted () {
  },
  methods: {
    clickCb (status) {
      console.log(status)
      this.$store.commit(mutations.SET_STATUS_FILTER, {
        statusName: status.name,
        value: !status.value
      })
    }
  }
}
</script>

<style lang="scss">
</style>
