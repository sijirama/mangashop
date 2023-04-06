import Express from "express";
import dotenv from "dotenv";

//Import Routes
import { MangaRoute } from "./routes/manga";
import { RootRoute } from "./routes/root";

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 5173;


//////////////////////////////MIDDLEWARE
app.use(Express.urlencoded({ extended: false }));  // built-in middleware to handle urlencoded form data
app.use(Express.json());  // built-in middleware for json



////////////////////////////////ROUTES
app.get("/", RootRoute);
app.use("/manga", MangaRoute);



////////////////////////////////SERVER
app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});
