const modelUser = require('../models/User');
const {mutileMongooseToObject , mongooseToObject} = require('../models/mongoose');
class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home',{layout : 'relx'});
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
