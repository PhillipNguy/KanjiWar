const router = require("express").Router();
const controllers = require("./controllers/");
const authMiddleware = require("./middleware/auth");

//user model
router.post("/register", controllers.user.register);
router.post("/login", controllers.user.login);
router.post("/logout", controllers.user.logout);

//deck model
router.get("/decks", controllers.deck.getDecks);
router.post("/createDeck", controllers.deck.createDeck);
router.delete("/deleteDeck", controllers.deck.deleteDeck);

//card model
router.get("/newCard", controllers.card.newCard);
router.post("/addToDeck", controllers.card.addToDeck);
router.get("/getCards", controllers.card.getCards);
router.delete("/deleteCard", controllers.card.deleteCard);
router.get("/displayCard", controllers.card.displayCard);

module.exports = router;
