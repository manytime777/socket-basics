var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
//console.log(now.format('x'));
console.log(now.valueOf());

var timestamp = 1466411427742;
var timestampMoment = moment.utc(timestamp);

//console.log(timestampMoment.format()); // 11:06 am
//console.log(timestampMoment.format('h:mm a')); // 11:06 am
console.log(timestampMoment.local().format('h:mm a')); // 11:06 am

/*
now.subtract(1, 'year');

console.log(now.format());
console.log(now.format('MMM Do YYYY, h:mma')); // Oct 5th 2015, 6:45 pm
*/