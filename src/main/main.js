const { startGroup, endGroup } = require('@actions/core')

const getRepoData = require('./get-repo-data.js')
const sync = require('./sync.js')

async function main () {
  startGroup('Repository data retrieval')
  const data = getRepoData()
  endGroup()
  startGroup('Repository synchronization')
  await sync(data)
  endGroup()
}

main()
