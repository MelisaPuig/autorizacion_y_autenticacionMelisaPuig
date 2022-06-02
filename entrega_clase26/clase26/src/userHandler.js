const userDAO = require("./modelo/dao/user");

class User {
  constructor() {
    this.handleRegister = this.handleRegister.bind(this);
    this.forceLogin = this.forceLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  async handleRegister(req, res, next) {
    try {
      const { username, password } = req.body;
      await userDAO.register(username, password);
      res.redirect(302, "/login");
    } catch (error) {
      next(error);
    }
  }

  forceLogin(req, res, next) {
    try {
      if (!req.user) {
        return res.redirect(302, "/login");
      }
      if (!req.user.username) {
        return res.redirect(302, "/login");
      }
      if (req.user.username === "") {
        return res.redirect(302, "/login");
      }
      next();
    } catch (error) {
      next(error);
    }
  }

  async handleLogout(req, res, next) {
    try {
      console.log(req.user);
      if (!req.user) {
        return res.redirect(302, "/login");
      }
      const username = req.user.username;
      if (!username) {
        return res.redirect(302, "/login");
      }
      req.logout(() => {
        req.session.destroy();
        res.render("logout", { username });
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   *  PRIVATE METHODS.
   */
}

module.exports = new User();
