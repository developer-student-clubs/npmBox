const getJwtToken = require('../helpers/getJwtToken')

const cookieToken = (user, res) => {
    const token = getJwtToken(user.id);
    const options = {
        expires: new Date(
            Date.now() + 3 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true // This is server only cookie - can be manage by cookie
    };
    user.password = undefined; // we don't want to pass password
    
    // setting cookie
    res.status(200).cookie('token', token, options).json({
        success: true,
        token,
        user
    });
}

module.exports = cookieToken;