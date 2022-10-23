
# Cloudinary

## What is Cloudinary ?

- Cloudinary's Node.js SDK provides simple, yet comprehensive image and video upload, transformation, optimization, and delivery capabilities that you can implement using code that integrates seamlessly with your existing Node.js application.

## Set up and configure the SDK
### Install the SDK
- In a terminal in your Node.js environment run:
```
   npm install cloudinary
```
### Set your API environment variable
- In a terminal, set your `CLOUDINARY_URL` environment variable.

- Replace `CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME` with the API environment variable copied from your account credentials:
   - On Mac or Linux:
   ```
     export CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
   ```
   - On Windows:
   ```
     set CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
   ```



## Cloudinary features and capabilities:
- [Media upload guide](https://cloudinary.com/documentation/image_video_and_file_upload): Provides details and examples of the upload options.
- [Image transformations guide](https://cloudinary.com/documentation/image_transformations): Provides details and examples of the transformations you can apply to image assets.
- [Video transformations guide](https://cloudinary.com/documentation/video_manipulation_and_delivery): Provides details and examples of the transformations you can apply to video assets.
- [Transformation URL API Reference](https://cloudinary.com/documentation/transformation_reference): Provides details and examples of all available transformation parameters.
- [Admin API guide](https://cloudinary.com/documentation/admin_api): Provides details and examples of the methods available for managing and organizing your media assets.
