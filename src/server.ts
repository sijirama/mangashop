import Express from "express";
import dotenv from "dotenv";

//Mongoose
import Mongoose from "mongoose";
import connectDB from "./config/dbConn";
connectDB();

//Import Routes
import { MangaRoute } from "./routes/manga";
import { RootRoute } from "./routes/root";

const app = Express();

//DOTENV
dotenv.config();
const PORT = process.env.PORT || 5173;

//MongoDB
import { MongoClient } from "mongodb";
const url = `mongodb://localhost:${PORT}`;

//////////////////////////////MIDDLEWARE
app.use(Express.urlencoded({ extended: false })); // built-in middleware to handle urlencoded form data
app.use(Express.json()); // built-in middleware for json

////////////////////////////////ROUTES
app.get("/", RootRoute);
app.use("/manga", MangaRoute);

////////////////////////////////SERVER
Mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on Port:${PORT}`);
  });
});
