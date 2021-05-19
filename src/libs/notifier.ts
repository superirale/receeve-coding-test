import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { IEventData, INotifier } from './models';


export class Notifier implements INotifier {

    private snsClient: SNSClient;

    constructor () {
        this.snsClient = new SNSClient({
            region: process.env.REGION
        });
    }

    public async publish(data: IEventData) {

        const params = {
            Message: JSON.stringify({
                default: JSON.stringify(data)
            }),
            MessageStructure: 'json',
            TopicArn: process.env.SNS_TOPIC_ARN
        };
        try {
            await this.snsClient.send(new PublishCommand(params));
          } catch (err) {
            throw new Error(err.message);
          }
    }
}