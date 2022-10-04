// UID js
import { uid } from 'uid';
// import { uid } from 'uid/secure';
// import { uid } from 'uid/single';

// create random id 
// default lenght: 11
console.log(uid())

// unique id with custom lenght
console.log(uid(5))
console.log(uid(15))
console.log(uid(20))
