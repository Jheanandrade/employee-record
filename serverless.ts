import type { AWS } from '@serverless/typescript';
import {
  createEmployee, 
  deleteEmployee, 
  updateEmployee,
  getEmployee,
  getAllEmployee
} from './src/main/functions'

const serverlessConfiguration: AWS = {
  service: 'employee-record',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack', "serverless-iam-roles-per-function"],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },

  functions: { createEmployee, deleteEmployee, updateEmployee, getEmployee, getAllEmployee },
  resources: {
    Resources: {
      employeeTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties:{
          TableName: 'employeeTable',
          AttributeDefinitions: [{
            AttributeName: 'id',
            AttributeType: 'S'
          }],
          KeySchema:[{
            AttributeName: 'id',
            KeyType: 'HASH'
          }],
          ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
          }
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
