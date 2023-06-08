let databases = require('./config.js')


const data = {
    Todo : "Create Appwrite CRUD Application",
    isCompleted : true
}

const update = databases.updateDocument("Database Id","Collection Id","Document Id",data)

update.then((res) => {
    // Updated Response  
},(err)=>{
    // Error 
})
