import groupBy from '@/helpers/group-by'

const languageTagFilter = (tag) => {
  return tag === 'French' || tag === 'English'
}

const isFrenchSubmission = (submission) => {
  var languages = submission.tags.filter(languageTagFilter)

  return languages.length === 1 && languages[0] === 'French'
}

const isEnglishSubmission = (submission) => {
  var languages = submission.tags.filter(languageTagFilter)

  return languages.length === 1 && languages[0] === 'English'
}

const isBothLanguagesSubmission = (submission) => {
  var languages = submission.tags.filter(languageTagFilter)

  return languages.length === 2
}

const isNoLanguageSubmission = (submission) => {
  var languages = submission.tags.filter(languageTagFilter)

  return languages.length === 0
}

const groupByAuthors = (submissions) => {
  const groupedSubmissions = groupBy(submissions, 'speakerName')

  const submissionsByAuthor = Object.keys(groupedSubmissions).map(function (key) {
    const authorSumissions = groupedSubmissions[key]
    return {
      speakerName: key,
      hasFeedback: authorSumissions.some(submission => submission.feedbacks !== undefined && submission.feedbacks.length > 0),
      submissions: authorSumissions
    }
  })

  return submissionsByAuthor
}

const submissionToSubmissionLight = (submission) => {
  return {
    id: submission.id,
    speakerName: submission.profile.name,
    speakerLocation: submission.profile.location,
    talkName: submission.talk.title,
    tags: submission.tags,
    languages: submission.tags.filter(languageTagFilter),
    feedbacks: submission.feedback.map(feedback => {
      return {
        user: feedback.user.name,
        body: feedback.body,
        creationDate: feedback.created_at
      }
    }),
    ratings: submission.ratings
  }
}

export default {
  languageTagFilter,
  isFrenchSubmission,
  isEnglishSubmission,
  isBothLanguagesSubmission,
  isNoLanguageSubmission,
  groupByAuthors,
  submissionToSubmissionLight
}
