const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
const dndRouter = require('./routes/dnd.router')
const charRouter = require('./routes/character.router')
const campRouter = require('./routes/campaigns.router')
const equipmentRouter = require('./routes/character.equipment')
// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
app.use('/api/rulebook', dndRouter);
app.use('/api/spells', dndRouter);
app.use('/api/equipment', dndRouter);
app.use('/api/characters', charRouter);
app.use('/api/campaigns', campRouter)
app.use('/api/inventory', equipmentRouter)

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
