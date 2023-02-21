const express = require('express')
const router = express.Router();
const adminController = require('../controller/adminController')


router.get('/', adminController.getAccueil)

router.get('/histoire', adminController.getHistoire)

router.get('/personnages', adminController.getPersonnages)

router.get('/mangas', adminController.getMangas)

router.get('/animes', adminController.getAnimes)

router.get('/films', adminController.getFilms)

module.exports = router;