import Express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { verifyJWT } from "./middleware/verifyJWT";
import credentialsMiddleware from "./middleware/credentials";

//Mongoose
import Mongoose from "mongoose";
import connectDB from "./config/dbConn";
connectDB();

//Import Routes
import { MangaRoute } from "./routes/manga";
import { RootRoute } from "./routes/root";
import {RegisterRoute} from "./routes/register"
import {LoginRoute} from "./routes/login"
import {LogoutRoute} from "./routes/logout"
import { RefreshTokenRoute } from "./routes/refreshtoken";

const app = Express();

//DOTENV
dotenv.config();
const PORT = process.env.PORT || 5173;

//MongoDB
import { MongoClient } from "mongodb";
const url = `mongodb://localhost:${PORT}`;

//////////////////////////////MIDDLEWARE
app.use(cookieParser())
app.use(credentialsMiddleware)
app.use(Express.urlencoded({ extended: false })); // built-in middleware to handle urlencoded form data
app.use(Express.json()); // built-in middleware for json

////////////////////////////////ROUTES
app.get("/", RootRoute);
app.use("/register", RegisterRoute);
app.use("/login", LoginRoute);
app.use("/refresh" , RefreshTokenRoute)
app.use("/logout", LogoutRoute);


app.use(verifyJWT)
app.use("/manga", MangaRoute);
////////////////////////////////SERVER
Mongoose.connection.once("open", () => {
  console.clear()
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on Port:${PORT}`);
  });
});
