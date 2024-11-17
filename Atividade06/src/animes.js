const { v4: uuidv4 } = require("uuid");

const animes = [
    {
        id: uuidv4(),
        name: "Naruto",
        genre: "Ação, Aventura",
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
        name: "Attack on Titan",
        genre: "Ação, Drama",
        studio: "Wit Studio",
    },
    {
        id: uuidv4(),
        name: "My Hero Academia",
        genre: "Ação, Super-herói",
        studio: "Bones",
    },
    {
        id: uuidv4(),
        name: "Demon Slayer",
        genre: "Ação, Fantasia",
        studio: "ufotable",
    },
    {
        id: uuidv4(),
        name: "Fullmetal Alchemist: Brotherhood",
        genre: "Ação, Aventura",
        studio: "Bones",
    },
    {
        id: uuidv4(),
        name: "Death Note",
        genre: "Mistério, Sobrenatural",
        studio: "Madhouse",
    },
    {
        id: uuidv4(),
        name: "Sword Art Online",
        genre: "Ação, Aventura",
        studio: "A-1 Pictures",
    },
    {
        id: uuidv4(),
        name: "Dragon Ball Z",
        genre: "Ação, Artes Marciais",
        studio: "Toei Animation",
    },
    {
        id: uuidv4(),
        name: "Fairy Tail",
        genre: "Ação, Aventura",
        studio: "A-1 Pictures",
    },
    {
        id: uuidv4(),
        name: "Bleach",
        genre: "Ação, Sobrenatural",
        studio: "Pierrot",
    },
];

module.exports = animes;
