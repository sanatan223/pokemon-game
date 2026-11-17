import express from 'express';
import path from 'path';
import cors from 'cors';
import { signupRouter } from './routes/signupRoute.js';
import { loginRouter } from './routes/loginRoute.js';
import { authRouter } from './routes/authRoute.js';
import { logoutRouter } from './routes/logoutRoute.js';
import { userPokemonRouter } from './routes/userPokemonRoute.js';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,              
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json()); 
app.use(session({
  secret: process.env.SESSION_SECRET,
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
app.use('/api/user-pokemon', userPokemonRouter);

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});