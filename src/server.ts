import Express from "express";
import dotenv from "dotenv";

import { MangaRoute } from "./routes/manga";
import { RootRoute } from "./routes/root";

dotenv.config();

const app = Express();
const PORT = process.env.PORT || 5173;


//////////////////////////////MIDDLEWARE

// built-in middleware to handle urlencoded form data
app.use(Express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(Express.json());

////////////////////////////////ROUTES
app.get("/", RootRoute);
app.use("/manga", MangaRoute);



////////////////////////////////SERVER
app.listen(PORT, () => {
  console.log(`Server running on Port:${PORT}`);
});
