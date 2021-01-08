# Intro

A demo node express app to show off GitHub Actions CD capabilities by deploying to an Azure App Service.

This web app will allow you to search for any GitHub user by their handle!

## Setup
1. Create an Azure App Service and App Service Plan to host your node express app
2. Create deployment slots in the App Service for your different enviroments
3. Download the Publish Profile for the respective deployment slots


## Run App Locally:

1. Fork/Clone Repo
2. `npm install`
3. `npm run test`
4. `npm run dev`

## Triggering Azure Deployment

### Reference Material
- [Environments - GitHub Docs](https://docs.github.com/en/free-pro-team@latest/actions/reference/environments)

- [Using the visualization graph](https://docs.github.com/en/free-pro-team@latest/actions/managing-workflow-runs/using-the-visualization-graph)

- [Microsoft Docs - Deploy to App Service using GitHub Actions](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel)

- [Helpful Guide on createing a Node Express App](https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/)