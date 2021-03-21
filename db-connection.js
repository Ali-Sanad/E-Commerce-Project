const mongoose = require("mongoose"); 
//// MONGoose Connect to Atlas DATABASE ////////
const url =process.env.MONGO_DB_CONNECTION_STRING;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
     useFindAndModify: false 
  })
  .then((result) => {
    console.log("connected To Atlas DB");
  })
  .catch((err) => {
    console.log("can't connect to Atlas DB");
  });

    
