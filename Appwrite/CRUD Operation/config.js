const {Client,Databases} = require('node-appwrite')

const client = new Client();

const databases = new Databases(client);

client
.setEndpoint('Your API Endpoint') 
.setProject('Your project ID') 
.setKey('Your API Secret Key')

module.exports = databases