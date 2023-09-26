// Require the cloudinary library
var cloudinary = require('cloudinary');

cloudinary.config({ 
    // set clous name
    cloud_name: 'dlwggdgquv', 
    //set api key
    api_key: '1381674747939375861', 
    //set api screat key
    api_secret: 'v941TgmZpQHs30fxggdgg0lrws1ngBOU',
    // Return "https" URLs by setting secure: true
    secure: true
  });

cloudinary.uploader
.upload("hello.jpg")
.then(result=>console.log(result));

// {
//     asset_id: 'a1b93a56ab88edf97e0732de10394cbb',
//     public_id: 'bsrocy0ph744ncscwxoj',
//     version: 1666503342,
//     version_id: '76eb90e8e8c16f8e2c02d1750cf4bb7b',
//     signature: 'bae2abaf64a4c8454cfd921583bdb40a6d12e13d',
//     width: 2976,
//     format: 'jpg',
//     resource_type: 'image',
//     created_at: '2022-10-23T05:35:42Z',
//     tags: [],
//     bytes: 1042638,
//     type: 'upload',
//     etag: '27fef05593a10f4028b4d0e7cf381c11',
//     placeholder: false,
//     folder: '',
//     original_filename: 'hello',
//     api_key: '1381447396775861'
//   }

//Cloudinary's Node.js SDK provides simple, yet comprehensive image and video upload, transformation, optimization, and delivery capabilities that you can implement using code that integrates seamlessly with your existing Node.js application.
cloudinary.image("front_face.png", {secure: true, transformation: [
    {width: 150, height: 150, gravity: "face", crop: "thumb"},
    {radius: 20},
    {effect: "sepia"},
    {overlay: "cloudinary_icon_blue", gravity: "south_east", x: 5, y: 5, width: 50, opacity: 60, effect: "brightness:200"},
    {angle: 10}
    ]})
