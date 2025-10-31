import express from "express";
import mongoose from "mongoose";
import path from "path";
import { shortUrlFn, getOriginalUrl } from "./controllers/url.js";

let app = express();

app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Making Connection
mongoose
  .connect("mongodb+srv://sample:sample@learning.cavmn17.mongodb.net/", {
    dbName: "learning",
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// Routes
app.get("/", (req, res) => {
  res.render("index", { shortUrl: null });
});

app.post("/short", shortUrlFn);

// Making A Dynamic Route to get ShortCode
app.get("/:shortCode", getOriginalUrl);

let port = 1000;
app.listen(port, () => console.log(`port is running on ${port}`));
