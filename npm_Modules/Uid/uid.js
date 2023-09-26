// UID js


// Below uid import is by default in non-secure mode
// It uses Math.random to produce UUIDs
import { uid } from 'uid';


// Below imported uid is in secure mode which produces cryptographically secure UUIDs
// It uses current environment's crypto module
// Uncomment below line to see the working
// import { uid } from 'uid/secure';


// Below imported uid is in single mode which does not maintain internal cache 
// It is best for short-lived environments
// import { uid } from 'uid/single';


// create random id 
// default length: 11
console.log(uid())

// unique id with custom length
console.log(uid(5))
console.log(uid(15))
console.log(uid(20))
