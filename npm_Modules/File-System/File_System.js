//File-system 
const fs=require('fs');


//Make a Directory
fs.mkdir(path,mode,(err)=>{
    if(err)
    {
        console.log(err);//if there is some error it will show them
    }
    else{
        console.log("Directory Created successfully");
    }
});
//path :- path for making new directory
//mode :- mode in which we want directory (default - 077)

fs.readdir(path,(err,files)=>{

    if(err)
        console.log(err);

    //operations on the files     
});

//mkdirSync is used to create a directory Synchronously
fs.mkdirSync(path,options)
//options :- optional paramenter which determines how to create directory like recursively, etc.

//Remove a Directory

fs.rmdir(path,(err)=>{
    if(err)
        console.log(err);
});

//open a file

fs.open(file_path,flags[mode],(err,file_data)=>{
    if(err)
        console.log(err);
});
//flags are like  :-r,r+,etc
//flags are for mode of restriction


//writeFile will create a new file with the given data
fs.writeFile(file_path,data, (err)=>{
    if(err)
    {
        console.log(err);
    }
});


//Asynchronus read

fs.readFile(file_path,(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
});


//Synchronus Read
//dat_sync will have the content of the file
var data_sync=fs.readFileSync(file_path);


//Append data in the file
fs.appendFile(file_path,appended_data , 'utf8', (err)=>{
    if(err){
        console.log(err);
    }
});



//Close

fs.close(fd,(err)=>{
    if(err)
        console.log(err);
});

//For deleting a file we use unlink

fs.unlink(file_data , (err)=>{
    if(err)
        console.log(err);
});

//Rename 

fs.rename(old_name,new_name,(err)=>{
    if(err)
        console.log(err);
});

