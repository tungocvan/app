//const modelUser = require('../models/User');
//const {mutileMongooseToObject , mongooseToObject} = require('../models/mongoose');
const products = [
                    {"id":1,"title":"Sạc RELX Kits chỉ còn 599k !!","price":"599.000"},
                    {"id":3,"title":"RELX Infinity Pods.","price":"150.000"},
                    {"id":5,"title":"Thiết bị Pod RELX Nano","price":"150.000"},
                    {"id":7,"title":"Hệ thống Relx Pod có sẵn 1 pod đầu tiên cho bạc hà và xì gà với quà tặng miễn phí","price":"850.000"},
                    {"id":2,"title":"Thiết bị cần thiết RELX !!","price":"700.000"},
                    {"id":4,"title":"RELX Infinity (RELX thế hệ thứ 4).","price":"900.000"},
                    {"id":6,"title":"Relx Pod - Pack 3 Pod Dầu Cho Relx Pod System Chính hãng","price":"350.000"}
                 ];
class SiteController {
  // [GET] /
  index(req, res) {
    res.render('home',{layout : 'relx'});
  } 
  postDetail(req, res) {
    //console.log('id:',req.params.id);
    let item = products.find(value => value.id == req.params.id);
    res.render('postDetail',{layout : 'relx' , item});
  } 

  // [GET] /search
  sanpham(req, res) {
    res.render('sanpham',{layout : 'relx'});
  }
}

module.exports = new SiteController();
