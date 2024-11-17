const { v4: uuidv4 } = require("uuid");

const animes = [
    {
        id: uuidv4(),
        name: "Bleach",
        genre: "Ação, Sobrenatural",
        studio: "Pierrot",
    },
    {
        id: uuidv4(),
        name: "One Piece",
        genre: "Ação, Aventura",
        studio: "Toei Animation",
    },
    {
        id: uuidv4(),
        name: "Dragon Ball Z",
        genre: "Ação, Artes Marciais",
        studio: "Toei Animation",
    },
    {
        id: uuidv4(),
        name: "Death Note",
        genre: "Mistério, Sobrenatural",
        studio: "Madhouse",
    },
    {
        id: uuidv4(),
        name: "Naruto",
        genre: "Ação, Aventura",
        studio: "Pierrot",
    },
    {
        id: uuidv4(),
        name: "Steins;Gate",
        genre: "Ficção Científica, Drama",
        studio: "White Fox",
    },
    {
        id: uuidv4(),
        name: "Code Geass",
        genre: "Mecha, Suspense",
        studio: "Sunrise",
    },
    {
        id: uuidv4(),
        name: "Demon Slayer",
        genre: "Ação, Fantasia",
        studio: "ufotable",
    },
    {
        id: uuidv4(),
        name: "My Hero Academia",
        genre: "Ação, Super-herói",
        studio: "Bones",
    },
    {
        id: uuidv4(),
        name: "Hunter x Hunter",
        genre: "Ação, Aventura",
        studio: "Madhouse",
    },
    {
        id: uuidv4(),
        name: "Attack on Titan",
        genre: "Ação, Drama",
        studio: "Wit Studio",
    },
];

module.exports = animes;
