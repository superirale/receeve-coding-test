import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuidv4 } from 'uuid';

import { IStorage } from './models';


export class Dynamo implements IStorage {

    private DBClient: DynamoDBDocumentClient;

    constructor () {
        const client = new DynamoDB({
            region: process.env.REGION
        });
        this.DBClient = DynamoDBDocumentClient.from(client);
    }

    public async save(tableName: string, data: any) {

        data.id = uuidv4();

        const params = {
            TableName: tableName,
            Item: data,
        };
        try {
            await this.DBClient.send(new PutCommand(params));  
        } catch (err) {
           throw new Error(err.message);
        }
    }
}
