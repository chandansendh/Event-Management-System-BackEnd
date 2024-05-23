const express = require("express");
const event = require("../controllers/event-controler");
const router = express.Router();


router.route("/eventcreate").post(event.eventCreate).get(event.getEvent).patch(event.editEvent).delete(event.deleteEvent);

module.exports=router;