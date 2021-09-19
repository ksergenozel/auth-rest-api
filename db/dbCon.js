const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/auth-rest-api', {

    useNewUrlParser: true,
  
  })
  .then(() => console.log('Database connection is successful.'))
  .catch((err) => console.log(err));
