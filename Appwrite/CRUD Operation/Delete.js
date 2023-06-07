let databases = require('./config.js')

const deleted = databases.deleteDocument("Database Id","Collection Id","Document Id")

deleted.then((res)=>{
    // Deleted Document
},(err)=>{
    // Error
})