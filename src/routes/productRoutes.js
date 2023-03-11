const express = require("express");
const router = express.Router();
const productController = require('../controller/productController')

router.get('/', productController.movies)

router.get('/create', productController.create)
// router.post('/create', productController.createProcess)

router.get('/edit/:id', productController.edit)
router.put('/edit/:id', productController.editProcess)

// router.delete('/delete/:id', productController.delete)

router.get('/:id', productController.detail)

module.exports = router