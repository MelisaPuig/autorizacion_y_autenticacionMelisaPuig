const expressSession = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const userDao = require("./modelo/dao/user");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await userDao.login(username, password);
      console.log(`Logueado ${JSON.stringify(user)}`);
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.serializeUser(function (user, done) {
  console.log(user);
  done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
  try {
    const dbUser = await userDao.findById(id);
    return done(null, dbUser);
  } catch (error) {
    return done(error, null);
  }
});

module.exports = passport;
