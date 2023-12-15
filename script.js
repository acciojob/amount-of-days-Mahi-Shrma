//your JS code here. If required.
// function daysOfAYear(year){
// 	if(year % 4 = 0 && year % 100!= 0 || year%400 == 0){
// 		return 366;
// 	}
// 	return 365;
// }
// let year = prompt("Enter the year");
// alert(daysOfAYear(year));
// A function that takes a year as an input and returns the number of days in that year
function daysOfAYear(year) {
  // A leap year is divisible by 4, except if it is also divisible by 100 and not divisible by 400
  let isLeapYear = (year % 4 == 0) && !(year % 100 == 0 && year % 400 != 0);
  // A normal year has 365 days, a leap year has 366 days
  return isLeapYear ? 366 : 365;
}
