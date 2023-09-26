//what is routing:
/* Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).*/ 

//when user want to request to server side or client side that time it will use also if we want work with api that time it will more usefull
//we make get request,post request,put request ,delete request

//to get request
import express from 'express';
import router from './router1.js'
var app = express();
//without router request
/*
app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.post('/home', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
 });
 

app.listen(5000);*/


//with router request
app.use(express.json());
app.use('/api',router);

app.listen(5000);