const fetch = require('node-fetch')

module.exports = ({ repo, branch }) => {
  const init = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.AUTH_TOKEN}`
    }
  }
  return fetch(`http://${process.env.REMOTE_IP}/remote-sync/${repo}?branch=${branch}`, init)
    .then(res => res.json())
    .then(console.log)
}
