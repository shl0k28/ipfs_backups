import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

class Ipfs_Backups {
    private dynamoClient: DynamoDBDocument

    constructor(accessKey: string, secret: string, region: string) {
        const dynamoDbClient = new DynamoDBClient({
            credentials: {
                accessKeyId: accessKey, 
                secretAccessKey: secret
            },
            region
        })
        this.dynamoClient = DynamoDBDocument.from(dynamoDbClient)
    }
}