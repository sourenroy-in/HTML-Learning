// import moment from 'moment';
const moment = require('moment');

const now = moment();
console.log(now.format()); // e.g., 2026-03-28T17:00:05-07:00


moment().format('MMMM Do YYYY, h:mm:ss a'); // March 29th 2026, 8:19:06 pm
moment().format('dddd');                    // Sunday
moment().format("MMM Do YY");               // Mar 29th 26
moment().format('YYYY [escaped] YYYY');     // 2026 escaped 2026
moment().format();     