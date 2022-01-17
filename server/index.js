'use strict';
const express = require ('express');
const cors = require('cors');
const app = express();

const router = require('./router');
const port = process.env.port || 3000;
//what does process.env do??

const session = require('express-session');
const SECRET = process.env.SECRET || 'the cat with a hat sat on a bat';

//What does this config obj do?
const corsConfig = {
  origin: `http://localhost:${port}`,
  credentials: true
}
const models = require('./models/index')

app.use(cors(corsConfig));
// app.use(express.static());
app.use(express.json());

app.use(session({
  name: 'sid',
  saveUninitialized: false,
  resave:false,
  secret: SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60, //1hr
    sameSite:true,
    httpOnly: false,
    //change later
    secure: false,
  },
}));


app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Nothing is found 🥶🥶🙏🏻')
});

(async function bootstrap () {
  try {
    await models.sequelize.sync();
    console.log('Connected to DB');
  } catch (e) {
    console.error(e)
  }
})();

app.listen(port, (e) => {
  if (e) console.error(e);
  else {
    console.log(`Server running at http://localhost:${port} 🤭😂🧐`);
  }
})
