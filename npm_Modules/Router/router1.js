import express from "express"
const router=express.Router();

//to get request
router.get('/',function(req, res){
    console.log("this is get request");
    res.send("Hello World!")})


//to post request
router.post('/work',function(req, res){
    console.log("post reuqest is called")
    res.send("You just called the post method at '/hello'!\n");})

//also we can create put and delete using this routing
export default router