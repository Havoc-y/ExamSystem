var jwt = require('jsonwebtoken');

function run () {
    const token = jwt.sign(1, 'Ysy');
    console.log(token);
}


run();