const animeService = require("../services/animeService");

class AnimeController {
    getAllAnimes(req, res) {
        const animes = animeService.getAllAnimes();
        res.status(200).json(animes);
    }

    getAnimeById(req, res) {
        try {
            const anime = animeService.getAnimeById(req.params.id);
            res.status(200).json(anime);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    createAnime(req, res) {
        try {
            const { name, genre, studio } = req.body;
            const anime = animeService.createAnime(name, genre, studio);
            res.status(201).json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    updateAnime(req, res) {
        try {
            const { name, genre, studio } = req.body;
            const anime = animeService.updateAnime(req.params.id, name, genre, studio);
            res.status(200).json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    deleteAnime(req, res) {
        try {
            animeService.deleteAnime(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new AnimeController();
