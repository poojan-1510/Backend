const moment = require('moment');

const wrapped = moment(new Date());
const dateString = wrapped.format('YYYY-MM-DD');
const timeString = wrapped.format('HH:mm:ss');

console.log(`Date: ${dateString}`);
console.log(`Time: ${timeString}`);

