# Receeve Coding Test

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

## Test your service

This template contains a single lambda function triggered by an HTTP request made on the provisioned API Gateway REST API `/webhook` route with `POST` method. The request body must be provided as `application/json`. The body structure is tested by API Gateway against `src/functions/webhook/schema.ts` JSON-Schema definition: it must contain the `signature` and `event-data` properties.

- requesting any other path than `/webhook` with any other method than `POST` will result in API Gateway returning a `404` HTTP error code
- sending a `POST` request to `/webhook` with a payload **not** containing a object properties named `signature` and `event-data`` will result in API Gateway returning a `406` HTTP error code

### Locally

In order to test the hello function locally, run the following command:

- `serverless offline start` 

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.


### Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

- `functions` - containing code base and configuration for your lambda functions
- `libs` - containing shared code base between your lambdas

