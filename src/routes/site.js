const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//router.use('/search', siteController.search);
router.get('/postDetail/:id', siteController.postDetail);
router.get('/san-pham', siteController.sanpham);
router.get('/', siteController.index);

module.exports = router;
