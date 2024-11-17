const animeRepository = require("../repositories/animeRepository");

class AnimeService {
    getAllAnimes() {
        return animeRepository.getAll();
    }

    getAnimeById(id) {
        const anime = animeRepository.getById(id);
        if (!anime) {
            throw new Error("Anime não encontrado");
        }
        return anime;
    }

    createAnime(name, genre, studio) {
        if (!name || !genre || !studio) {
            throw new Error("Dados inválidos");
        }
        return animeRepository.create(name, genre, studio);
    }

    updateAnime(id, name, genre, studio) {
        if (!name || !genre || !studio) {
            throw new Error("Dados inválidos");
        }
        const anime = animeRepository.update(id, name, genre, studio);
        if (!anime) {
            throw new Error("Anime não encontrado");
        }
        return anime;
    }

    deleteAnime(id) {
        const success = animeRepository.delete(id);
        if (!success) {
            throw new Error("Anime não encontrado");
        }
    }
}

module.exports = new AnimeService();
