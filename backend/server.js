const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is Running Successfully");
});
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   // console.log(req.params.id)
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started on PORT ${port}`.yellow.bold));
