import { Ipfs_Backups } from './backups'
import { config } from 'dotenv'
config()

const accessKey = process.env.AWS_ACCESS_KEY as string
const secretKey = process.env.AWS_SECRET_KEY as string
const lighthouse = process.env.LIGHTHOUSE_API_KEY as string

const backups = new Ipfs_Backups(accessKey, secretKey, 'us-west-1')

const main = async () => {
    const res = await backups.backupAwsDynamo('wallet_transactions', lighthouse, 'test_backups')
    console.log(res)
}