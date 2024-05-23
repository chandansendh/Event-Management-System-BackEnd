const Event = require("../Model/event-model");

const eventCreate = async (req, res) => {
  try {
    const response = req.body;
    console.log(response);
    await Event.create(response);
    return res.status(200).json({ message: "Event create successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Event not created" });
  }
};


const getEvent = async (req, res) => {
  try {
    const response = await Event.find();
    console.log(response);
    // await Event.create(response);
    return res.status(200).json({ message: response });
  } catch (error) {
    return res.status(500).json({ message: "No data found" });
  }
};

const editEvent = async (req, res) => {
  try {
    const response = req.body.id;
    const data = req.body;
    console.log(data);
    await Event.findByIdAndUpdate(response,{title: data.title,
  description: data.description,
  date: data.date,
  time: data.time,
  location: data.location,
  price:data.price});
    return res.status(200).json({ message: "Update Successful" });
  } catch (error) {
    return res.status(500).json({ message: "Update fail" });
  }
};
const deleteEvent= async(req,res)=>{
  try {
    const response = req.body.id;
    const data = req.body;
    console.log(data);
    await Event.findByIdAndDelete(response);
    return res.status(200).json({ message: "Delete Successful" });
  } catch (error) {
    res.status(500).json({ message: "Delete fail" });
  }
}

module.exports = {eventCreate,getEvent,editEvent,deleteEvent};
