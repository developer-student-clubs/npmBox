import { response } from 'express';
import express  from 'express';
var app=express();
import routes from './routes.js';

/*  here is demo of simple routing mechanism in express
    
    1. open terminal type "node express.js"
    2. open browser and type localhost:9003                     output: Home Page
                        type localhost:9003/about               output: About Page
                        type localhost:9003/contact             output: Contact Page
                        type localhost:9003/welcome             output: Welcome Page
                        type localhost:9003/ddu/abc/123         output: The id you specified is 123 name is abc
                        type localhost:9003/ddu/abc/1234        output: The id you specified is 123 name is abc
                        type localhost:9003/ddu/123/abc         output: cannot get or post

*/

app.get("/",(req,res)=>
{
    res.send('Home Page');
});

app.get("/about",(req,res)=>
{
    res.status(200).send("About");
})

app.get("/welcome",(req,res)=>
{
    res.send("welcome  page");
})
app.get("/contact",(req,res)=>
{
    res.send("welcome to contact page");
})

app.get('/ddu/:name/:id([0-9]{3})', function(req, res){   // here we are using regular expression to validate the id
    res.send('The id you specified is ' + req.params.id + 'name is ' + req.params.name);
});


app.get('/index.html',(req,res)=> // 
{
    res.sendFile(__dirname+"/"+"index.html");
})

app.get('/get',(req,res)=>         // this is demo of query string
{
    var response={
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.listen(9003,()=>          // define port which is listening  i.e(localhost:9003)
{
    console.log("listening at 9003");
});

