const router = require('express').Router();
const controllers = require('./controllers/');
const authMiddleware = require('./middleware/auth');

//user model
router.post('/register', controllers.register);
router.post('/login', controllers.login);
//router.post('/logout', controllers.logout);

//deck model
router.get('/decks', authMiddleware, controllers.getDecks);
router.post('/createDeck', authMiddleware, controllers.createDeck);

//card model
router.get('./newCard', authMiddleware, controllers.newCard);

module.exports = router;