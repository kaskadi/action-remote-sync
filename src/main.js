const { startGroup, endGroup } = require('@actions/core')

const validateEnv = require('./main/validate-env.js')
const getRepoData = require('./main/get-repo-data.js')
const sync = require('./main/sync.js')

async function main () {
  startGroup('Environment variable validation')
  validateEnv()
  endGroup()
  startGroup('Repository data retrieval')
  const data = getRepoData()
  endGroup()
  startGroup('Repository synchronization')
  await sync(data)
  endGroup()
}

main()
