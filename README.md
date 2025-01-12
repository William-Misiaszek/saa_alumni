# [ADAPT SAA Alumni](https://github.com/SU-SWS/saa_alumni)
 
<a href="https://codeclimate.com/github/SU-SWS/saa_alumni/maintainability"><img src="https://api.codeclimate.com/v1/badges/6545d64d90025f75e2c8/maintainability" /></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce1b5cc8-4507-46b9-9416-dae43ce65989/deploy-status)](https://app.netlify.com/sites/stanford-alumni/deploys)

Changelog: [Changelog.md](CHANGELOG.md)

Description
---

Netlify hosted, Gatsby built, storyblok headless cms site for alumni.stanford.edu

## Installation

_Development_

```
cp example.env .env
* Manually find and add the `VAULT_ROLE_ID` and `VAULT_ROLE_ID` to .env
* Or, you can retrieve the `VAULT_ROLE_ID` and `VAULT_ROLE_ID` by first running `netlify login` then `netlify link`, then use the `netlify env:get VAR_NAME` command. After that manually add them to .env
* After the `VAULT_ROLE_ID` and `VAULT_SECRET_ID` environment variables have been added to .env,
get the FontAwesome NPM token from the Netlify site settings in environment variables and install the packages
FONTAWESOME_NPM_AUTH_TOKEN=MYFATOKEN npm install
* Retrieve all other environment variables from the vault
npm run vault:local
* Then fire up your development server using gatsby
npm run dev
* Or a netlify development server
netlify dev
```

## Connecting to Storyblok

You will need an access token to connect to a storyblok space. You can contact a member on the project team to get one but if you follow the installation steps you should be able to get one from vault. `Development` builds can use the `preview` access tokens from Storyblok, but `Production` builds should only ever use the `public` access tokens. This is to ensure no unpublished content is accidentally revealed to the public. By default the environment variables from vault are set to point to the development environment and then overridden with the contextual environment plugin. For local development, you can override any of the environment variables as the netlify build plugins don't take effect when running netlify dev.

## Development vs Production builds.

This project makes use of the NODE_ENV environment variable to run different builds. We also use `.env` files to pass through configuration options which are then transformed by netlify plugins. By default the environment variables from vault are set to point to the development environment and then overridden with the contextual environment plugin. For local development, you can override any of the environment variables as the netlify build plugins don't take effect when running netlify dev.

## Connecting to Netlify

You will need to be added to the Stanford ADAPT Team Netlify account. Contact a memeber on the team to receive access. Once you have been invited to the Team Netlify account, you will need to link your local enviroment.

If you do not have Netlify CLI locally setup, you will want to run the following command within your terminal:

```
npm install netlify-cli -g
```

Once Netlify CLI has been installed, you will want to log into your Netlify account:

```
netlify login
```

You'll be prompted to sign into your Netlify account and authorize your local Netlify CLI.

Then you can link your local project repository to Netlify by running:

```
netlify link
```

Using the Storyblok Editor on localhost
---

Currently Storyblok v2 doesn't allow accessing the environment with http, so to make it work, https has to be added to localhost. For your convenience we have created the certificate and key but your system may not trust this self signed cert. Once you have localhost up and running you can visit the url in the browser and proceed past the warning or you can add the certificate to your trusted list.

OSX:
https://readwriteexercise.com/posts/trust-self-signed-certificates-macos/

To start:
```
npm run dev
npm run https-proxy-start
```

Or to choose your own ports:
```
netlify dev
npm run hps -- --target=64946 --source=3010
```

You will be prompted to select from four options. You will want to select the option:

```
> Use current git remote origin (https://github.com/SU-SWS/saa_alumni)
```

Once your local has been successfully link to Netlify, you can run the following command to streamline your local development experience:

```
netlify dev
```

Encountering issues with setup? Please refer to the [official Netlify CLI documentation](https://docs.netlify.com/cli/get-started/#netlify-dev) for further asssitance.

## Troubleshooting

If you are experiencing issues with this module try reverting the feature first. If you are still experiencing issues try posting an issue on the GitHub issues page.

## Environment Variables

Environment variable file: `.env`
We are no longer using `production` and `development` environment variable files. We use the [netlify-plugin-contextual-env](https://www.npmjs.com/package/netlify-plugin-contextual-env) plugin to support different environments. See below for more.

*Netlify-plugin-contextual-env*
We use this plugin to set the environment variables in the various different environments. See [the plugin page](https://www.npmjs.com/package/netlify-plugin-contextual-env) for a full set of configuration options. We are use the `prefix` option to separate out the different configuration.

## Contextual Environment Variables in LAMBDA functions
The contextual-env plugin from Netlify runs on build time and does not provide runtime support for LAMBDA functions. To get those to work we have to add an additional plugin that inlines the values of the environment variables into your LAMBDA functions.

See: [netlify-plugin-inline-functions-env](https://www.npmjs.com/package/netlify-plugin-inline-functions-env)

Prefix strategy
A non-prefixed version has to exist in order for the plugin to work. For example, GATSBY_TOKEN has to exist in order for DEPLOY_PREVIEW_GATSBY_TOKEN to work. The non-prefixed version of the environment variable is the default and then overridden with the plugin at build time. The default tokens should all point to the development environments so that branch deployes, dev environments, and build previews all use that token. We then use the `PROD_` prefix to override the production environment builds.

## Environment Variables on Netlify

Netlify should support only a minimal amount of environment variables in their UI. VAULT_ROLE_ID and VAULT_SECRET are required but all other environment variables should go into either a global folder or into the project specific folder.

The project specific folder for this website is `secret/data/projects/adapt/alumni`

As environment variables get contextualized through plugins, there is no need to separate out dev/prod variables into separate folders.

## Vault

Vault source paths:
- 'secret/data/projects/adapt/alumni'
- 'secret/data/projects/adapt/certs'

Environment variables are stored (and versioned) in vault.stanford.edu. You can fetch them and have them written to `.env` by running `npm run vault`. You will need to add the vault role id and vault secret into the `.env` file first. You can likely find those values in the Netlify environment variables UI. If you can't find them. Please ask another developer.

The script that fetches the secrets is 'netlify-plugin-vault-variables'. It is exectued by running `npm run vault:local`.

When the script runs, it should only append new values to your `.env` file. This means you can have your own local environment variables or overwrite ones that are coming from vault. You can change this so that vault overwrite all values by setting the environment variable VAULT_OVERWRITE=true.

## Development Workflows

All general development work should be based off of the `dev` branch.
Branches should abide by the following branch name format: `{branch-type}/JIRA-###_optional-description-of-task`
where `branch-type` is `feature/`, `task/`, or `bug/` and `JIRA-###` corresponds with the Jira ticket number.
This will ensure that features get labeled and organized correctly in the release and connect to Jira appropriately.

- Create branch from `dev` following the above outlined branch naming conventions.
- Complete work in your branch.
- Create a pull request from your branch into `dev` branch. This will deploy a Netlify preview for your branch.
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of work completed`.

Pull requests against dev will need to pass status checks for the following:
- lint
- test
- codeclimate
- Branch up to date with `dev`
- Netlify build/deploy preview

Pull requests merged into dev will kickoff a Netlify branch deploy for the `dev` branch.

## Release Workflow

To release code to production you will need to create a release branch from `dev` and make a pull request to `main`.
Including semver tags (`[major]`, `[minor]`, `[patch]`) will automatically add a semver label to the PR which will
determine how to increment semver during release. If no label is provided it will default to `patch`.

- Create branch from `dev` (or commit ref from `dev`) with `release/` prefix and optional semver tag (e.g. `release/completely-refactor-everything[major]`)
- Create a pull request from your `release/my-cool-release` branch into `main`
- On PR approval, do a standard **merge commit** into `main`

Merges to `main` will kickoff the following tasks:
- Semver version bump
- Publish github release
- Netlify production build and deploy
- Merge changes back into `dev`

## Hotfix Workflow

Hotfix workflows should only ever be used when there is a production bug that needs immediate attention and
there are changes in `dev` that are not ready for deployment.

- Create a `hotfix/` branch from `main`
- Complete the fix in your branch
- Create a pull request from your hotfix branch into `main`
- On PR approval, **squash merge** your branch with the following merge commit message format: `JIRA-### | Brief description of hotfix`.

Depending on the nature your hotfix and the history of `dev` you may need to to manually merge `main` back into `dev` to resolve merge conflicts.

### Codeclimate

To add codeclimate checks log in to codeclimate and add your repository with `dev` as the default branch.
Go the codeclimate repo settings and install the Github pull request status updates. Now go back to Github
and make sure `codeclimate` is added to required Status Checks for the `dev` branch protection settings.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this module. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)

### Component Organization in This Repo

#### Partials

TODO

#### View Modes for Components

TODO

### Megaprofile Mocking
Megaprofile mocking can be enabled locally by running `npm run dev:mock`, or by adding the following
environment variable:
```
MEGAPROFILE_MOCK=true
```
This will return mocked responses rather than call the Megaprofile Profile API.

Mocks for additional endpoints can be added in ./src/utilties/mockServer.js.
Mock data should generally be stored in separate files in ./src/utilities/mocks.
