const express = require("express"); ///Express Package
const app = express();
const mongoose = require('mongoose');
var session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require("path");

require("./db-connection");

//routes required
const userRouter = require("./routes/users");
const productRouter = require("./routes/products");
const orderRouter = require('./routes/order')

// ///  Express Session
// app.use(session({
//     secret: 'mysecretkey',
//     resave: false,
//     saveUninitialized: true,
//     store: MongoStore.create({
//         mongoUrl: mongoose.connection,
//         ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//       })    
//   }),()=>{console.log(session.Cookie)});

  
  ///////////////////////////////

    app.use(express.json()); ////// Parse JSON BODY PARSER
    
    app.use(express.static('public'));
//routes path
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/order',orderRouter)


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});



app.listen(process.env.PORT||3000, () => {
    console.log("Server is up and listen to port 3000");
  });