const { warning } = require('@actions/core')
// envVarMeta object is mapping an environment variable name to its validation function
const envVarMeta = {
  REMOTE_IP: envVar => {
    // check if it is really an IP
    const { isIP } = require('net')
    return isIP(envVar)
  },
  AUTH_TOKEN: envVar => {
    const components = envVar.split('.')
    // check if JWT has 3 parts separated by '.'
    if (components.length !== 3) {
      return false
    }
    try {
      // check if each parts can be decoded from base64
      const decodedComponents = components.map(comp => Buffer.from(comp, 'base64').toString())
      // check if header and body are JSON that can be parsed properly
      JSON.parse(decodedComponents[0])
      JSON.parse(decodedComponents[1])
      return true
    } catch {
      return false
    }
  }
}

module.exports = () => {
  for (const envVar in envVarMeta) {
    console.log('INFO: checking environment variables existence...')
    checkVar(envVar)
    console.log('SUCCESS: all required environment variables seem to exist!')
    console.log('INFO: validating environment variables...')
    validateVar(envVar, envVarMeta[envVar])
    console.log('SUCCESS: all required environment variable seems to be valid!')
  }
}

function checkVar (varName) {
  if (!process.env[varName]) {
    warning(`Environment variable ${varName} was not set. Please set ${varName} in the action environment variable in order to use this action.`)
    process.exit(1)
  }
}

function validateVar (varName, validator) {
  if (!validator(process.env[varName])) {
    warning(`Environment variable ${varName} value seems to be malformed. Please check the value assigned to it.`)
    process.exit(1)
  }
}
