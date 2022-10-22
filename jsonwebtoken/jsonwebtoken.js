// import the package
const jwt = require('jsonwebtoken');

// 
module.exports = {
  generateToken: async ({ username }) => {
    const token = jwt.sign(
      username,
      'somesupersecretkey',
      {
        expiresIn: '1h'
      }
    );
    return token;
  }
};

