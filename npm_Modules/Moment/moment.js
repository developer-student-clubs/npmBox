//MOMENT Js
import moment from "moment";

//Moment Object
let m = moment();

// All methods of moment
console.log(moment);

//parsing
// Local time in String
console.log(`To string ${m.toString()}`);

//ISO time in string 
console.log(`ISO time ${m.toISOString()}`);

//changing date 
m = moment("1919-01-02");
//Now onwards date will be the new date

//changing date and Time using format

m = moment("23/02/2020 4:40PM", "DD/MM/YYYY h:mmA");

//create using millisecond
let mil = 1000;
m = moment(mil);//It will add mil millisecond to 01 Jan 1970  5:30 

//create using second

m = moment.unix(100);//It will add 100 second to 01 Jan 1970  5:30 

//create A moment object in UTC mode
m = moment.utc();

//changing to current local time
m = moment();


//GETTER AND SETTER
//GETTER
console.log(m.date());// here we can use weeks,hours,seconds,years,many more instead of date


//Alternative
console.log(m.get("minute"));// here we can use weeks,hours,years,many more instead of minute

moment().millisecond(1029);

moment().dayOfYear(244)//244th day of the year

moment().weekYear(27)//27th week in a year


//Setter

m.date(22);//change date to 22
m.year(2090);//changes year to 2090 we can use minute,day,many more  instead of year

//Aternative

m.set('date', 10);//changes date to 10;


//Max and Min
//returns Max time
console.log(moment.max(moment('1919-01-02'), moment('1919-06-02')).toString());
//return Min time
console.log(moment.min(moment('1919-01-02'), moment('1919-06-02')).toString());

//Issame
console.log(moment('1919-01-02').isSame('1919-01-02'));//return True or False
//Is before
console.log(moment('1919-01-02').isBefore('1919-01-02'));//return True or False
//Is after
console.log(moment('1919-01-02').isAfter('1919-01-02'));//return True or False
// We can use isLeapYear , isSameorAfter ,many more

//Is between

const a1 = moment('1919-01-02');
const a2 = moment('1919-03-02');
const a3 = moment('1919-02-02');

console.log(a1.isBefore(a2, a3));//Return Bool

m = moment();
//ADD and SUBTRACT

//ADD
m.add(9, "days");//adding 9 days to m . We can use year,min,second,etc

m.add(19, 'millisecond').add(9, 'second')//adding 19 millisecond and 9 second

//We can add Object too

m.add({
    'hour': 1,//adding 1 hour
    'year': 1//adding 1 year
});

moment().add(90, "minute").calendar();


//Subtract

m.subtract(294, 'millisecond');//subtracting 294 milliseconds

m.subtract(2, 'year').subtract(34, 'day');

m.subtract({
    'millisecond': 293,
    'days': 23
});

moment().subtract(9, "years").calendar();


m.endOf("year")//Changing time to end of year

m.startOf("months")//changing time to start of month


//changing back to local

m.local();


//Displaying
moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); // Sunday, February 14th 2010, 3:25:50 pm

moment("2011/10/31", "YYYY/MM/DD").fromNow();//8 years from now

var a = moment([2007, 0, 28]);
var b = moment([2007, 0, 29]);
a.from(b) // "a day ago"

a.diff(b)//difference between a and b

a.diff(b, 'year')//Year differnce between a and b

//Number of days in a month
moment("2012-02", "YYYY-MM").daysInMonth() // 29


//To array

let x = moment().toArray();

// To object
x = moment().toObject();

//Duration

let x_dur = moment.duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: '2',
    years: '2'
})

x_dur = moment.duration().asMonths(3);//Can use days,year,weeks,etc instead of months

x_dur = moment.duration().months()//single months 

