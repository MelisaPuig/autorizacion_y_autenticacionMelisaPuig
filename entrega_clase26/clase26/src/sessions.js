const session = require("express-session");
const MongoStore = require("connect-mongo");

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = session({
  store: MongoStore.create({
    mongoOptions,
    mongoUrl:
      "mongodb+srv://melisa:melisa@cluster0.yq8ih.mongodb.net/?retryWrites=true&w=majority",
  }),
  secret: "C8nBy42RG2fAUAafpZbzsU675",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 10, // La sesión durará 10 minutos.
    path: "/",
    httpOnly: true,
    secure: false,
  },
});
