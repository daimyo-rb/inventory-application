const express = require('express');
const path = require('node:path');
const categoryRouter = require('./routes/categoryRouter');
const itemRouter = require('./routes/itemRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/category', categoryRouter);
app.use('/item', itemRouter);
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));