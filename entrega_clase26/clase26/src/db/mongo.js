const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://melisa:melisa@cluster0.yq8ih.mongodb.net/?retryWrites=true&w=majority";

class Mongo {
  async connect() {
    try {
      if (mongoose.STATES[mongoose.connection.readyState] === "connected") {
        return mongoose.connection.db;
      }
      const mongooseConfig = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
        autoCreate: true,
      };
      await mongoose.connect(MONGO_URL, mongooseConfig);
      if (mongoose.STATES[mongoose.connection.readyState] !== "connected") {
        throw new Error("MongoDB isn't connected.");
      }
      return mongoose.connection.db;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Mongo();
