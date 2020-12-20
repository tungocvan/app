const modelUser = require('../models/User');
const {mutileMongooseToObject , mongooseToObject} = require('../models/mongoose');
class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home',{layout : 'relx'});
  } 
  postDetail(req, res) {
    res.render('postDetail',{layout : 'relx'});
  } 

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
