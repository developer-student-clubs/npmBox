
const R = require('ramda');

/*Examples of some of the good first operator and functions*/

/*
 *  OPERATOR '__'
 *
 *    A special placeholder value used to specify "gaps" within curried functions, allowing partial application of any combination of argument,
 *    regardless of their positions
 *
 *    If fun is a function declared as:  const fun = (arg1 , arg2 , arg3) => {return arg1 + arg2 + arg3;} , we can have
 *
 *    const fun1 = fun(1 , R.__ , 1)  => returns function which takes 1 argument and adds 2 to  it.
 *    const fun2 = fun(R.__ , 1)      => returns function with takes two argument and adds one to it.  //=> can be curried again
 *    const ans  = fun2(1 , 1)        => adds 1 + 1 to previous result which was to results in 3.
 */

const greet = R.replace('{name}', R.__, 'Hello, {name}!');    // greet is a function which replaces the name passed to it in the result
greet('Alice'); //=> 'Hello, Alice!'

/*
 * ADD (math function)
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
 * COMPARATOR
 *
 *    functionality: creates comparator function for performing comparison with our style , useful in OOPs
 *
 *    @param
 *      takes two values(object / strings / number)
 *
 *    @return
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
 * CONCAT
 *
 *   functionality: merges two values
 *
 *   @param
 *    two values (string / arrays / list)
 *
 *   @return
 *    a value of type same as first value
 */

R.concat('ABC', 'DEF'); // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
R.concat([], []); //=> []

/*
 * MEMOIZEWITH  (function)
 *    a great function for CP . A DP problem is easily solves using recursion and
 *    memoization and functionality is provided here.
 *
 *    It creates a new function that caches result of original function
 *    with key as parameter(s) passed and returns the result when same parameters
 *    are passed not forgetting history (time<->memory trade off).
 *
 *    Note: argument type return type and key collison is needed to be taken care
 *    of.
 *
 *    @param {function} mFn to cache the result  //=>need not to be passed //=> this function takes care of the history
 *    @param  {function} fn original function
 *    @return {function} combined Meoized version of fn.
 */

let count = 0;   //=> count to keep track of number of full execution of factorial function
const factorial = R.memoizeWith(Number, n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});

/*
 * when number 'n' is passed the mFn checks for the result corresponding to it in the records ,
 * if it is present the function execution returns the result
 * else the count is incremented and new result is created which also gets saved by mFn.
 */

factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120

console.log(count);

/*
 * count = 1 (implying only 1 time execution of factorial function and other times the memoized function is called which has kept previous result
 *            correspoding to parameter passed.)
 */

/*
 * COMPOSE
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
 *  automatically curried while that of pipe is and the direction of functions executed in" .
 */

const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
const yellGreeting = R.compose(R.toUpper, classyGreeting);
yellGreeting('James', 'Bond');

/*
 * "THE NAME'S BOND, JAMES BOND"  <= final result
 *
 *  first the arguments (firstName , lastName) is passed to the function calssyGreeting which returns the statement
 *  "The name's Bond, James Bond" which is passed to the R.toUpper function which gives our final result.
 */

R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7

/* execution : R.multiply -> R.add -> Math.abs.
 *
 * first multiplication takes place giving result {-8} to R.add(1)
 *  which performs addtion of 1 to the number passed resulting in -7, the
 *  result (-7) it is passed to Math.abs function whilch gives final answer as 7
 */

/*
 * PIPE
 *  same functionality as compose just diffrence is that its result is auto
 *  curried and its execution is from left to right direction of argument list.
 *
 *  @param {function} f_left leftmost function accepting any number of argument
 *  @param {* , function} fn nth function from left side of argument list restricted to take only one argument.
 *
 *  @return returns final result be it a value or a curried function.
 */

const f = R.pipe(Math.pow, R.negate, R.inc);
f(3, 4); //=> -(3^4) + 1

/* excution : Math.pow -> R.negate -> R.inc .
 *
 * a curried function is given in form of "f" by calling Math.pow without
 * passing argument , which accepts two numbers whose result will then be passed * to R.negate which multiplies -1 to the result and result of it is passed to
 * R.inc which increments the valuse by 1.
 */

//RADHE RADHE RAM RAM
