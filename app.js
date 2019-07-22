const express = require("express");
const app = express();
const gplay = require("google-play-scraper");
const cors = require('cors');
const port = 3000;

app.use(express.json());
app.use(cors());
app.get("/app-by-id/:appId", getAppById);
app.get("/", (req, res) => {
    return res.json({ message: "hello" });
});
async function getAppById(req, res) {
      let { appId } = req.params;
      let appOnChPlay = await gplay.app({ appId });
      return res.json(appOnChPlay);
}

app.listen(port);