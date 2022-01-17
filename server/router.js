const router = require('express').Router();
const controllers = require('./controllers/');
const authMiddleware = require('./middleware/auth');

//user model
router.post('/register', controllers.user.register);
router.post('/login', controllers.user.login);
router.post('/logout', controllers.user.logout);

//deck model
router.get('/decks', authMiddleware, controllers.deck.getDecks);
router.post('/createDeck', authMiddleware, controllers.deck.createDeck);
router.delete('./deleteDeck', authMiddleware, controllers.deck.deleteDeck);

//card model
router.get('./newCard', authMiddleware, controllers.card.newCard);
router.post('./addToDeck', authMiddleware, controllers.card.addToDeck);
router.get('./getCards', authMiddleware, controllers.card.getCards);
router.delete('./deleteCard', authMiddleware, controllers.card.deleteCard);
router.get('./displayCard', authMiddleware, controllers.card.displayCard);

module.exports = router;