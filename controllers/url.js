import { url } from "../Models/Url.js";
import shortid from "shortid";
export const shortUrlFn = async (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = shortid.generate();
  const shortUrl = `http://localhost:1000/${shortCode}`;
  // saving to database
  const newUrl = new url({ shortCode, longUrl });
  await newUrl.save();
  console.log("Short Saved = ", newUrl);

  res.render("index.ejs", { shortUrl });
};

//making Dynamic Route function
export const getOriginalUrl = async (req, res) => {
  const shortCode = req.params.shortCode;
  const originalData = await url.findOne({ shortCode });
  //Redirecting to original URL
  if (originalData) {
    res.redirect(originalData.longUrl);
  } else {
    res.json({
      message: "Something Went Wrong",
    });
  }
};
