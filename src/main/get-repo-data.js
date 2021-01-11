module.exports = () => {
  console.log('INFO: retrieving repository name and current branch...')
  const { GITHUB_REPOSITORY, GITHUB_BASE_REF, GITHUB_REF } = process.env
  const repo = getLastElement(GITHUB_REPOSITORY)
  const branch = GITHUB_BASE_REF ? getLastElement(GITHUB_BASE_REF) : getLastElement(GITHUB_REF)
  console.log(`SUCCESS: target repository name is ${repo} and current branch is ${branch}!`)
  return { repo, branch }
}

// get last element of a slash separated string
function getLastElement (str) {
  return str.split('/').pop()
}
