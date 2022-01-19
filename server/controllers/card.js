const db = require("../models/");

//checks card with db to make sure it does not exist
exports.newCard = async (req, res) => {
  try {
    const { kanji, meanings, kun_readings, on_readings } = req.body;
    //check if this is correct
    const checkCardExist = await db.Card.findOne({
      where: { user_id: id, kanji: kanji },
      include: [{ and: true }],
    });
    if (!checkCardExist) {
      await db.Card.create({
        user_id: req.session.userId,
        kanji,
        meanings,
        kun_readings,
        on_readings,
      });
      res.status(200).send();
    } else {
      res.status(409).send();
    }
  } catch (e) {
    console.error(e);
    res.status(500).send({ e, message: "Could Not Get Card 🙏🏻" });
  }
};

exports.addToDeck = async (req, res) => {
  try {
    const { user_id, card } = req.body;
    // const { card, deck } = req.body;
    const newCard = await db.Card.create({
      user_id: user_id,
      // deck_id: deck.id,
      kanji: card.kanji,
      meaning: card.meaning,
      kun_readings: card.kun_readings,
      on_readings: card.on_readings,
    });
    res.status(200).send(newCard);
  } catch (e) {
    console.error(e);
    res.status(500).send({ e, message: "Could Not Add To Deck 😤" });
  }
};

exports.getCards = async (req, res) => {
  try {
    const { id } = req.body;
    const allCards = await db.Card.findAll({ where: { deck_id: id } });
    res.status(200).send(allCards);
  } catch (e) {
    console.error(e);
    res.status(500).send({ e, message: "Could Not Get Cards 🥲" });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedCard = await db.Card.destroy({
      where: ({ id } = id),
    });
    res.status(200).send(deletedCard);
  } catch (e) {
    console.error(e);
    res.status(500).send({ e, message: "Card Not Deleted 😒" });
  }
};

exports.displayCard = async (req, res) => {
  try {
    const { id } = req.body;
    const selectedCard = await db.Card.findOne({
      where: ({ id } = id),
    });
    res.status(200).send(selectedCard);
  } catch (e) {
    console.error(e);
    res.status(500).send({ e, message: "Card Not Found 😧" });
  }
};

//exports.displayCard = async (req, res) => {};
