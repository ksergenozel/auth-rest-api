const express = require('express');
require('./db/dbCon');

const userRouter = require('./router/userRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.listen(3000, () => {
  console.log('App started on port:3000.');
});
