let databases = require('./config.js')
const {ID} = require('node-appwrite')

const data = {
    Todo : "create Appwrite CRUD",
    isCompleted : false
}

// Create Document

const create = databases.createDocument("Database Id","Collection ID",ID.unique(),data)

create.then((res)=>{
    console.log("Document Created")
    console.log(res)
},(err)=>{
    console.log(err)
})