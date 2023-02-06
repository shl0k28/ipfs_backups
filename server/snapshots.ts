import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'
import { uploadBuffer } from '@lighthouse-web3/sdk'

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

    async backupAwsDynamo(tableName: string, token: string, fileName: string) {
        let dynamo = this.dynamoClient
        const res = await dynamo.scan({ TableName: tableName })
        let items = res.Items
        let curr_date = new Date()
    }
}