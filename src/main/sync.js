const fetch = require('node-fetch')
const { error } = require('@actions/core')

module.exports = ({ repo, branch }) => {
  console.log(`INFO: synchronizing ${branch} branch from ${repo}...`)
  const init = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
  }
  return fetch(`http://${process.env.REMOTE_IP}/remote-sync/${repo}?branch=${branch}`, init)
    .then(async res => {
      const { statusCode } = res
      const body = res.json()
      console.log(body)
      if (statusCode !== 200) {
        error(`Repository synchronization failed with the status code ${statusCode}...`)
        process.exit(1)
      } else {
        console.log(`SUCCESS: successfully synchronized ${branch} of ${repo} on the remote server!`)
      }
    })
    .catch(err => {
      console.log(err)
      error('Something unexpected happened...')
      process.exit(1)
    })
}
