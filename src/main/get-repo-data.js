const { error } = ('@actions/core')

module.exports = () => {
  console.log('INFO: retrieving repository and current branch...')
  const repo = getRepo()
  const branch = getBranch()
  console.log(`SUCCESS: target repository is ${repo} and current branch is ${branch}!`)
  return { repo, branch }
}

function getBranch () {
  const { GITHUB_BASE_REF, GITHUB_REF } = process.env
  const stripRef = ref => ref.replace('refs/heads/', '')
  return GITHUB_BASE_REF ? stripRef(GITHUB_BASE_REF) : stripRef(GITHUB_REF)
}

function getRepo () {
  const repo = process.env.GITHUB_REPOSITORY
  const [org, repoName] = repo.split('/')
  if (org !== 'kaskadi') {
    error('Repository has to belong to the kaskadi organization in order to be synchronized.')
    process.exit(1)
  }
  return repoName
}
