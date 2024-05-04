import express from "express";
import path from "path";
import cookiePaser from "cookie-parser";
import URL from "./models/url.model.js";
import dotenv from "dotenv";
import connectToMongo from "./connection.js";

import urlRouter from "./routes/url.routes.js";
import staticRouter from "./routes/static.routes.js";
import userRouter from "./routes/user.routes.js";
import retrictToLoggedinUserOnly from "./middleware/auth.middleware.js";

const app = express();

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;
console.log(PORT);

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());

const view_path = path.resolve("views");
app.set("view engine", "ejs");
app.set("views", view_path);

connectToMongo(process.env.DB_URI).then(() => console.log("Mongodb Connected"));

app.use("/", staticRouter);
app.use("/url", retrictToLoggedinUserOnly, urlRouter);
app.use("/user", userRouter);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
