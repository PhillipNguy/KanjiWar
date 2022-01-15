const db = require('../models/');
const bcypt = require('bcrypt');

const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10
// const saltRounds = 10



exports.register = async (req, res) => {
  try {
    const {username, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const userExist = await db.User.findAll({where: { username, email }, include: [{ or: true}]})
    // || db.User.findAll({where: { email }});
    if (userExist.length > 0) return res.status(409).send({message: "Email or Username already exist"});
    const user = await db.User.create({
      ...req.body,
      password: hash,
      score: 0
    });
    req.session.userId = user.id;
    res.status(200).send(user);
  }
  catch (e) {
    console.error(e);
    res.status(500).send(e);
  };
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.User.findAll({ where: { username }});
    if(user.length === 0) throw new Error();
    const passwordCheck = await bcypt.compare(password, user[0].password)
    if (passwordCheck === false) throw new Error();
    req.session.userId = user.id;
    res.status(200).send(user);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  };
};

// exports.logout = async (req, res) => {
//   try {
//     req.session.destroy
//   } catch (e) {
//     res.status(500).send({message: "Could not log out!"})
//   }
// }