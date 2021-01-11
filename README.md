[![Build status](https://img.shields.io/github/workflow/status/kaskadi/action-remote-sync/build?label=build&logo=mocha)](https://github.com/kaskadi/action-remote-sync/actions?query=workflow%3Abuild)
[![Static code analysis status](https://img.shields.io/github/workflow/status/kaskadi/action-remote-sync/analyze-code?label=codeQL&logo=github)](https://github.com/kaskadi/action-remote-sync/actions?query=workflow%3Aanalyze-code)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/action-remote-sync/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/action-remote-sync/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/action-remote-sync?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-remote-sync)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/action-remote-sync?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-remote-sync)
<!-- [![](https://img.shields.io/codeclimate/coverage/kaskadi/action-remote-sync?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/action-remote-sync) -->

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# What is this action for?

This action is automatically synchronizing the trigger branch of a repository it is implemented into with a given remote server. This server needs to offer access to a synchronization API (see [here](https://github.com/kaskadi/remote-sync-api)).

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```yaml
name: {YOUR-ACTION-NAME}
on: [{YOUR-ACTION-EVENT}]
jobs:
  {YOUR-JOB-NAME}:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: {YOUR-STEP-NAME}
      uses: kaskadi/action-remote-sync@master
      env:
        SYNC_API_ROOT: {SYNC_API_ROOT-VALUE}
        SYNC_API_AUTH_TOKEN: {SYNC_API_AUTH_TOKEN-VALUE}
```

**Note:** everything contained in single curly brackets (`{ }`) needs to be replaced by your desired values

**Environment variables:**
|        Variable       | Required | Description                                                                                                                            |
| :-------------------: | :------: | :------------------------------------------------------------------------------------------------------------------------------------- |
|    `SYNC_API_ROOT`    |  `true`  | Root of the server where the synchronization API is running. This should follow the following format: `http(s)://{DOMAIN}/{API_ROOT}`. |
| `SYNC_API_AUTH_TOKEN` |  `true`  | Authorization token used by the API to authorize requests.                                                                             |

<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->