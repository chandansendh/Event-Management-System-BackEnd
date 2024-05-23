const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  email: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true }
});

const Event = new model("Event", eventSchema);

module.exports = Event;
