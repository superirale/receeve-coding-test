import type { AWS } from '@serverless/typescript';

import { webhook } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'receeve',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true
    }
  },
  plugins: [
    'serverless-webpack',
    'serverless-offline-sns',
    'serverless-dotenv-plugin',
    'serverless-offline',
  ],
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'v1',
    region: 'eu-west-1',
    profile: 'telios',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: [
          'dynamodb:PutItem',
          'SNS:Publish',
        ],
        Resource: [
          "arn:aws:dynamodb:*:*:table/*",
          "arn:aws:sns:*:*:*",
        ]
      }
    ]
  },
  functions: { webhook }
}

module.exports = serverlessConfiguration;
