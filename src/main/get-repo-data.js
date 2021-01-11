module.exports = () => {
  const { GITHUB_REPOSITORY, GITHUB_BASE_REF, GITHUB_REF } = process.env
  return {
    repo: getLastElement(GITHUB_REPOSITORY),
    branch: GITHUB_BASE_REF ? getLastElement(GITHUB_BASE_REF) : getLastElement(GITHUB_REF)
  }
}

// get last element of a slash separated string
function getLastElement (str) {
  return str.split('/').pop()
}
