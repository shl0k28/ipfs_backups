### Backup AWS DynamoDB to IPFS

A simple library allowing orgs to backup their data from AWS DynamoDB to a distributed database like IPFS.

**To get started:**

1. Import Snapshots in your project
    ```import { Ipfs_Backups } from 'ipfs.backups' ```

2. Initialize a Snapshot Instance
   ``` const backups = new Ipfs_Backups(AWS_ACCESS_KEY, AWS_SECRET_KEY, 'YOUR_AWS_REGION') ```

3. Backup your DynamoDB table with Web3Storage
   ``` 
    const main = async () => {
        const result = await snapshots.backupToIpfs('wallet_transactions', lighthouse_api_key, 'test_backups')
        console.log(ipfsCid)
    }
   ```
