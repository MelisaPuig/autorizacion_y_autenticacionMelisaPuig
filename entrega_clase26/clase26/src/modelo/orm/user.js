const mongoose = require("mongoose");

const { Schema } = mongoose;

const schemaUser = new Schema(
  {
    //    _id: Schema.Types.ObjectId,
    username: {
      type: Schema.Types.String,
      unique: true,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", schemaUser);
