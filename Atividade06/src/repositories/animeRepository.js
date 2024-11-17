const { v4: uuidv4 } = require("uuid");
const Anime = require("../entities/anime");

class AnimeRepository {
    constructor() {
        this.animes = [
            new Anime(uuidv4(), "Naruto", "Ação, Aventura", "Pierrot"),
            new Anime(uuidv4(), "Attack on Titan", "Ação, Drama", "Wit Studio"),
            new Anime(uuidv4(), "My Hero Academia", "Ação, Super-herói", "Bones"),
            new Anime(uuidv4(), "One Punch Man", "Ação, Comédia", "Madhouse"),
            new Anime(uuidv4(), "Demon Slayer", "Ação, Fantasia", "ufotable"),
            new Anime(uuidv4(), "Fullmetal Alchemist: Brotherhood", "Ação, Aventura", "Bones"),
        ];
    }

    getAll() {
        return this.animes;
    }

    getById(id) {
        return this.animes.find((anime) => anime.id === id);
    }

    create(name, genre, studio) {
        const anime = new Anime(uuidv4(), name, genre, studio);
        this.animes.push(anime);
        return anime;
    }

    update(id, name, genre, studio) {
        const anime = this.getById(id);
        if (anime) {
            anime.name = name;
            anime.genre = genre;
            anime.studio = studio;
        }
        return anime;
    }

    delete(id) {
        const index = this.animes.findIndex((anime) => anime.id === id);
        if (index !== -1) {
            this.animes.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new AnimeRepository();