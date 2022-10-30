const R = require('ramda');

/*  
 *  Operator '__'
 *
 *    A special placeholder value used to specify "gaps" within curried functions, allowing partial application of any combination of argument, regardless of their positions
 *        
 *    If fun is a function declared as  const fun = (param1 , param2 , param3) => {return arg1 + arg2 + arg3;} , we can have
 *
 *    const fun1 = fun(1 , R.__ , 1) => returns function which takes 1 argument 
 *    const fun2 = fun(R.__ , 1) => returns function with two argument
 *    const fun3 = fun(1 , 1 , R.__ ) => returns function taking one argument
 */

const greet = R.replace('{name}', R.__, 'Hello, {name}!');    // greet is a function 
greet('Alice'); //=> 'Hello, Alice!'

/* 
 * add (math function)
 *
 *    @param
 *       (arg1 <number> , arg2 <number>)
 *
 *    @return 
 *       number
 */

R.add(2 , 3); //=> 5
const add7ToNum = R.add(7 , R.__);
add7ToNum(8); //=> 15

/*
 * comparator
 *
 *    functionality: creates comparator function for performing comparison with our * style
 *
 *    @param
 *      takes two values(number / object)
 *
 *    @return-type
 *      returns boolean based on comparision done.
 */

const byAge = R.comparator((a, b) => a.age < b.age);
const people = 
[
  { name: 'Emma', age: 70 },
  { name: 'Peter', age: 78 },
  { name: 'Mikhail', age: 62 },
];
const peopleByIncreasingAge = R.sort(byAge, people);
//=> [{ name: 'Mikhail', age: 62 },{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }]


/*
 * Concat
 *
 *   functionality: merges two values
 *
 *   @param
 *    two values (string / arrays / list)
 *
 *   return 
 *    a value of type same as first value
 */

R.concat('ABC', 'DEF'); // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
R.concat([], []); //=> []

/*
 * memoizeWith  (function)
 *    a great function for CP . A DP problem is easily solves using recursion and 
 *    memoization and functionality is provided here.
 *
 *    It creates a new function that caches result of calling original function 
 *    with key as parameter(s) passed and returns the result when same scenario 
 *    occurs preventing extra work to system (time<->memory trade off).
 *
 *    Note: argument type return type and key collison is needed to boe taken care
 *    of.
 *
 *    @param {function} mFn to cache the result  //=>need not to be passed
 *    @param  {function} fn original function   
 *    @return {function} combined Meoized version of fn.
 */

let count = 0;   //=> count to keep track of number of call to factorial function

const factorial = R.memoizeWith(Number, n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});

factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120

count; //=> 1 (implying only 1 call is made to factorial and other to the 
       //=> memoized function which keep tracks of previous result correspoding toparameter passed for that result.)


/*
 * Compose
 *    It helps in passing the result of one function directly to the another 
 *    one from right to left side.
 *
 *  @param {function} f_last the right most function accepting any number of 
 *                    argument
 *  @param {* , function} f_n nth function from right side accepting only one 
 *                        argument.
 *
 *  @return returns the final result after executing all the functions in right
 *          to left order.
 *
 *  Diffrence between Compose and Pipe is " result of compose is not 
 *  automatically curried while that of pipe is" .
 */

const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
const yellGreeting = R.compose(R.toUpper, classyGreeting);
yellGreeting('James', 'Bond'); 
/*
 * "THE NAME'S BOND, JAMES BOND"  <= result 
 *  
 *  first the arguments (firstName , lastName) is passed to the function 
 *  calssyGreeting which returns the statement "The name's Bond, James Bond" 
 *  which is passed to the R.toUpper function which gives uor final result.
 */

R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
//=>  first multiplication takes place giving result to R.add(1) which is a curried function which performs addtion of 1 to the number passed (-8) resulting in -7, the result (-7) it is passed to Math.abs function whilch gives final answer as 7.  

/*
 * Pipe
 *  same functionality as compose just diffrence is that its result is auto 
 *  curried and its execution is from left to right direction of argument list.
 *  
 *  @param {function} f_left leftmost function accepting any number of argument
 *  @param {* , function} fn nth function from left side of argument list.
 *
 *  @return returns final result be it a value or a curried function.
 */
const f = R.pipe(Math.pow, R.negate, R.inc);

f(3, 4); // -(3^4) + 1

//RADHE RADHE RAM RAM
