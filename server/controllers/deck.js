const db = require('../models/');

exports.getDecks = async (req, res) => {
  try {
    const { id } = req.body;
    const allDecks = await db.Deck.findAll({where: {user_id = id}});
    res.send(allDecks)
  } catch (e) {
    console.error(e);
    res.status(500).send(e)
  }
};

exports.createDeck = async (req, res) => {
  try {
    // const { name } = req.body;
    const newDeck = await db.Deck.create({
      //do not know if i did this right
      user_id = req.session.userId,
      ...req.body,
    })
    res.status(201).send(newDeck);
  } catch (e) {
    console.error(e);
    res.status(500).send(e)
  }
}