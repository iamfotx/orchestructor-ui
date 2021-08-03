<div align="center">
<h1>Orchestructor UI</h1>

<p>Orchestructor UI let's you stitch the microservices right way.</p>
</div>

---
<!-- prettier-ignore-start -->
![CI]
![CD]
[![PRs Welcome][prs-badge]][prs]
<!-- prettier-ignore-end -->

- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Deployment & Release](#deployment-&-release)
    - [🥁 Dev Deployment](#-dev-deployment)
    - [🚀 Production Deployment](#-production-deployment)


## Prerequisites
Make sure the followings are installed on your machine:

- node > [14.17.x][node]
- yarn > [1.22.x][yarn]

## Local Setup
After cloning the repo, make sure `.env` is properly set.

```sh
# install deps...
yarn install
```

```sh
# serve with hot reload at localhost:8080
yarn dev
```

```sh
# build for production
yarn build
```

```sh
# build for development
yarn build:dev
```

## Deployment & Release
`orchestructor-ui` uses `github-actions` for releases and deployments with the help of `netlify`. Github Actions are set up to deploy specific branches and git tags (version tags).

### Dev Deployment

1. Create a pull-request against the `develop` branch
2. Wait for the required checks to be passed.
3. Once required checks have passed & you have received a code review approval (ofc, only if team < 1), merge your commit into the `develop` branch

### Production Deployment
1. Create a "Release" ticket on the [Orchestructor Release Board][release-board]
2. Create a new pull request against the `master` branch from your dev branch (i.e. `develop`)
3. Add the `release-candidate` label in GitHub to your PR
4. Before the dev branch is merged into `master`, it should be tagged with a version number. These steps are as follows:

```bash
git checkout develop
git pull
npm version minor -m "release %s"
git push origin HEAD --tags
```
5. Run these commands to merge into `master`
```bash
git checkout master
git pull
git merge develop
git push
```

**IMPORTANT**

6. When ready, run the deployment by releasing already in place `release draft` with appropriate title and tag.
7. Once the release has finished, spot check production to make sure it includes your latest changes
8. Inform your team that the deployment has completed
9. Celebrate



<!-- prettier-ignore-start -->
[node]: https://nodejs.org/download/release/v14.17.0/
[yarn]: https://www.npmjs.com/package/yarn/v/1.22.0

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square

[prs]: http://makeapullrequest.com

[bugs]: https://github.com/iamfotx/orchestructor-ui/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc

[CI]: https://github.com/iamfotx/orchestructor-ui/actions/workflows/ci.yaml/badge.svg

[CD]: https://github.com/iamfotx/orchestructor-ui/actions/workflows/cd.dev.yaml/badge.svg

[release-board]: https://github.com/iamfotx/orchestructor-ui/projects/4

<!-- prettier-ignore-end -->
