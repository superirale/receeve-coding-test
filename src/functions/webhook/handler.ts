import { createHmac } from 'crypto';
import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';


import { IEventData, NotifierContext, StorageContext } from '@libs/models';
import { Dynamo } from '@libs/dynamo';
import { Notifier } from '@libs/notifier';

import schema from './schema';


const webhook: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

    const signatureValidationObj = {
        signingKey: process.env.MAILGUN_SIGNING_KEY,
        timestamp: event.body.signature.timestamp,
        token: event.body.signature.token,
        signature: event.body.signature.signature
    };
    const isRequestValid = isValidSignature(signatureValidationObj);

    if (!isRequestValid) {
        return formatJSONResponse(406, {
            message: "Request can not be verified"
        });
    }
    // Save the webhook data to database
    const storageContext = new StorageContext(new Dynamo());
    const tableName = process.env.DB_TABLE;
    storageContext.save(tableName, event.body);

    // publish event to a pub-sub service
    const eventData:IEventData = {
        provider: process.env.EMAIL_PROVIDER,
        timestamp: event.body['event-data'].timestamp,
        event: event.body['event-data'].event
    }
    const notifierContext = new NotifierContext(new Notifier());
    notifierContext.publish(eventData);

    return formatJSONResponse(200, {});
}


const isValidSignature = ({ signingKey, timestamp, token, signature }) => {

    const encodedToken = createHmac('sha256', signingKey)
      .update(timestamp.concat(token))
      .digest('hex');
    
    return (encodedToken === signature)
}

export const main = middyfy(webhook);
