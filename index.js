require("dotenv").config();
const express = require("express");
const authRouter = require("./Router/auth-route");
const contactRouter = require("./Router/contact-router");
const eventRouter = require("./Router/event-router");
const app = express();
const connectdb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const cors = require("cors");



const corsOptions = {
  origin: ["http://localhost:3001", "http://localhost:3000"],
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(("/api/auth"),authRouter);
app.use(("/api/form"),contactRouter);
app.use(("/api/event"),eventRouter);

app.use(errorMiddleware);



const PORT=5001;

connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});