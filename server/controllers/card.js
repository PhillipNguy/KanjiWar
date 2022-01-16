const db = require('../models/');


//checks card with db to make sure it does not exist
exports.newCard = async (req, res) => {
  try {
    const { kanji, meanings, kun_readings, on_readings } = req.body;
    const checkCardExist = await db.Card.findOne({where: { user_id = id, kanji = kanji }, include: [{and: true}]});
    if (!checkCardExist) await db.Card.create({
      user_id : req.session.userId,
      kanji,
      meanings,
      kun_readings,
      on_readings,
    })
    else {
      res.status(409).send();
    }


  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
};



//exports.displayCard = async (req, res) => {};