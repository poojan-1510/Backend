const fs = require('fs');

// myModule.js
exports.myFunction = () => {
  // Your function code here
};

exports.myVariable = 'Hello, Node.js!';
// myModule.js
module.exports = {
  myFunction: () => {
    // Your function code here
  },
  myVariable: 'Hello, Node.js!'
};

