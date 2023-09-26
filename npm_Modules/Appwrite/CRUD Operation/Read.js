const { Query } = require('node-appwrite')
let databases = require('./config.js')

// List All Documents

listAll = databases.listDocuments("Database Id","Collection Id")

listAll.then((res)=>{
    // console.log(res)
},(err)=>{
    console.log(err)
})

// List Documents With Query

listWithQuery = databases.listDocuments("Database Id","Collection Id",[Query.equal('isCompleted',[false])])

listWithQuery.then((res)=>{
    console.log(res)
},(err)=>{
    console.log(err)
})  