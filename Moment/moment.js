import moment from "moment";
// in relation to release date of this post
console.log(moment().format("MMMM Do YYYY")); // June 6th 2019
moment("20111031", "YYYYMMDD").fromNow(); // 8 years ago
moment().subtract(10, "days").calendar(); // 05/27/2019