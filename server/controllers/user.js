const models = require('../models/');
const bcrypt = require('bcrypt');

const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10
// const saltRounds = 10



exports.register = async (req, res) => {
  try {
    const {username, email, password } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const userExist = await models.User.findOne({where: { username, email }})
    if (userExist) return res.status(409).send({message: "Email or Username already exist"});
    const user = await models.User.create({
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
    const user = await models.User.findAll({ where: { username }});
    if(user.length === 0) throw new Error();
    const passwordCheck = await bcrypt.compare(password, user[0].password)
    if (passwordCheck === false) throw new Error();
    req.session.userId = user.id;
    res.status(200).send(user);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  };
};


//CHECK AUTHOR EXERCISE
exports.logout = async (req, res) => {
    req.session.destroy((e)=>{
      if (e) res.status(500).send({e, message:'Still logged in 😱😨'});
      else {
        res.clearCookie('sid');
        res.status(200).send({message: 'Logout Successful 😜🥳'})
      }
    })
}