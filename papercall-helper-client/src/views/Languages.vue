<template>
  <div class="languages-view">
    <h1>Languages</h1>

    <div>
      <ul>
        <li>NO LANGUAGE SET - {{numberOfNoneSubmissions}}</li>
        <li>French - {{numberOfFrenchSubmissions}}</li>
        <li>English - {{numberOfEnglishSubmissions}}</li>
        <li>French or English - {{numberOfBothSubmissions}}</li>
      </ul>
    </div>

    <h2 v-if="submissionsNone.length > 0">NO LANGUAGE SET - {{numberOfNoneSubmissions}}</h2>
    <author v-for="author in submissionsNone" :key="'none' +author.speakerName" :authorData="author" showLanguages></author>

    <h2>French - {{numberOfFrenchSubmissions}}</h2>
    <author v-for="author in submissionsFrench" :key="'french' +author.speakerName" :authorData="author" showLanguages></author>

    <h2>English - {{numberOfEnglishSubmissions}}</h2>
    <author v-for="author in submissionsEnglish" :key="'english' +author.speakerName" :authorData="author" showLanguages></author>

    <h2 v-if="submissionsBoth.length > 0">French or English - {{numberOfBothSubmissions}}</h2>
    <author v-for="author in submissionsBoth" :key="'both' +author.speakerName" :authorData="author" showLanguages></author>
  </div>
</template>

<script>
import submissionsHelpers from '@/helpers/submissions-helpers'
import Submission from '@/components/Submission'
import Author from '@/components/Author'

export default {
  name: 'languages',
  components: {
    Submission,
    Author
  },
  data () {
    return {
    }
  },
  computed: {
    numberOfFrenchSubmissions () {
      return this.countSubmissionsByLanguage(submissionsHelpers.isFrenchSubmission)
    },
    numberOfEnglishSubmissions () {
      return this.countSubmissionsByLanguage(submissionsHelpers.isEnglishSubmission)
    },
    numberOfNoneSubmissions () {
      return this.countSubmissionsByLanguage(submissionsHelpers.isNoLanguageSubmission)
    },
    numberOfBothSubmissions () {
      return this.countSubmissionsByLanguage(submissionsHelpers.isBothLanguagesSubmission)
    },
    submissionsFrench () {
      return this.getSubmissionsByLanguage(submissionsHelpers.isFrenchSubmission)
    },
    submissionsEnglish () {
      return this.getSubmissionsByLanguage(submissionsHelpers.isEnglishSubmission)
    },
    submissionsBoth () {
      return this.getSubmissionsByLanguage(submissionsHelpers.isBothLanguagesSubmission)
    },
    submissionsNone () {
      return this.getSubmissionsByLanguage(submissionsHelpers.isNoLanguageSubmission)
    }
  },
  mounted () {
  },
  methods: {
    getSubmissionsByLanguage (languageFilter) {
      const submissions = this.$store.getters.submissions

      const submissionsLight = submissions
        .filter(languageFilter)
        .map(submissionsHelpers.submissionToSubmissionLight)

      const submissionsByAuthor = submissionsHelpers.groupByAuthors(submissionsLight)

      return submissionsByAuthor
    },
    countSubmissionsByLanguage (languageFilter) {
      return this.$store.getters.submissions
        .filter(languageFilter)
        .length
    }
  }
}
</script>
