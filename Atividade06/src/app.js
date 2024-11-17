const express = require("express");
const app = express();
const animeController = require("./controllers/animeController");

app.use(express.json());

app.get("/animes", animeController.getAllAnimes);
app.get("/animes/:id", animeController.getAnimeById);
app.post("/animes", animeController.createAnime);
app.put("/animes/:id", animeController.updateAnime);
app.delete("/animes/:id", animeController.deleteAnime);

module.exports = app;
