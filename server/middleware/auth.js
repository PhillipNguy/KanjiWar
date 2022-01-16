const User = require('./../models/user');

const authMiddleware = async (req, res, next) => {
  try {
    const { userId } = req.session;
    const user = await User.findOne({ id: userId } )
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).send(e)
  }
}

module.exports = authMiddleware;