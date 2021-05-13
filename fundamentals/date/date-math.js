/**
 * I often have the need to compare date times.
 * I want to find a reliable way to do this.
 * 
 */
const d1 = new Date();
console.log(d1);
console.log(d1.getTime());
/**
 * The getTime method seems to return the Unix Timestamp for
 * that specific date;
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
 * 
 * This is in milliseconds, so plan accordingly.
 */
const d2String = '1 Jan 2020'
const d2 = new Date(d2String);
const d3String = '1 Jan 1990'
const d3 = new Date(d3String);
/**
 * This clearly shows the format will work.
 */
console.log(d2String)
console.log(d2);
console.log(d2.getTime());
console.log(d3String);
console.log(d3);
console.log(d3.getTime());