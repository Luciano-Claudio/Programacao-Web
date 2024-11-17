const server = require("./app");
const { v4: uuidv4 } = require("uuid");
const animeList = require("./animes");

server.listen(3333, () => console.log("Servidor rodando na porta 3333"));

server.get("/", (req, res) => {
    res.send("Bem-vindo novamente, mundo!");
});

server.get("/animes", (req, res) => {
    res.status(200).json(animeList);
});

server.get("/animes/:id", (req, res) => {
    const { id } = req.params;
    const selectedAnime = animeList.find((anime) => anime.id === id);
    if (!selectedAnime) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    res.status(200).json(selectedAnime);
});

server.post("/animes", (req, res) => {
    const { name, genre, studio } = req.body;
    if (!name || !genre || !studio) {
        return res.status(400).json({ message: "Informações inválidas" });
    }
    const newAnime = {
        id: uuidv4(),
        name,
        genre,
        studio,
    };
    animeList.push(newAnime);
    res.status(201).json(newAnime);
});

server.put("/animes/:id", (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;
    const selectedAnime = animeList.find((anime) => anime.id === id);
    if (!selectedAnime) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    if (!name || !genre || !studio) {
        return res.status(400).json({ message: "Informações inválidas" });
    }
    selectedAnime.name = name;
    selectedAnime.genre = genre;
    selectedAnime.studio = studio;
    res.status(200).json(selectedAnime);
});

server.delete("/animes/:id", (req, res) => {
    const { id } = req.params;
    const index = animeList.findIndex((anime) => anime.id === id);
    if (index === -1) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    animeList.splice(index, 1);
    res.status(204).send();
});
