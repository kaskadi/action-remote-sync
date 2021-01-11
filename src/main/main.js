const getRepoData = require('./get-repo-data.js')
const sync = require('./sync.js')

async function main () {
  await sync(getRepoData())
}

main()
