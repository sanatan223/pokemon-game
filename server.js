const express = require('express');
const path = require('path');
const cors = require('cors');
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');
const authRouter = require('./routes/authRoute');
const logoutRouter = require('./routes/logoutRoute');
const session = require('express-session');
const passport = require('passport');
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,              
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json()); 
app.use(session({
  secret: 'cats',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: 'lax',
    httpOnly: true
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);
app.use('/api/me', authRouter);
app.use('/api/logout', logoutRouter);

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});