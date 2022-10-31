// bring in prism and cookie

const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

// user signup

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // check empty validations
    if (!name || !email || !password) {
      throw new Error("Please provide all the fields");
    }

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    // send user a token
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

// login user
exports.login = async (req, res, next) => {
  try {
    // take information from user
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide all required information!");
    }

    // find a user based on email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // when there is no user
    if (!user) {
      throw new Error("No User Found with provided Data!");
    }

    // Password Mismatch
    if (user.password !== password) {
      throw new Error("Incorrect Password!");
    }

    // User is there and validation
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

// logout user
exports.logout = async (req, res, next) => {
  try {
    res.clearCookie('token');
    res.json({
        success: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
