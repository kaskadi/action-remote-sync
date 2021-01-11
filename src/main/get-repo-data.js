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
  const extractBranch = str => str.split('/').pop()
  return GITHUB_BASE_REF ? extractBranch(GITHUB_BASE_REF) : extractBranch(GITHUB_REF)
}

function getRepo () {
  const repo = process.env.GITHUB_REPOSITORY
  if (repo.split('/').shift() !== 'kaskadi') {
    error('Repository has to belong to the kaskadi organization in order to be synchronized.')
    process.exit(1)
  }
  return repo
}
