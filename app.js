const express = require('express');
const myRouter = require('./routes/myRouter');
const app = express();

app.set('views', 'views');
app.set('view engine', 'ejs');

app.use('/', myRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));