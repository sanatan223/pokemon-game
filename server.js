const express = require('express');
const path = require('path');
const cors = require('cors');
const signupRouter = require('./routes/signupRoute');
const loginRouter = require('./routes/loginRoute');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(express.json()); 
app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});