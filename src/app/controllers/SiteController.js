//const modelUser = require('../models/User');
//const {mutileMongooseToObject , mongooseToObject} = require('../models/mongoose');
const products = [
                    {"id":1,"title":"Sạc RELX Kits chỉ còn 599k !!","price":"599.000","img":"/images/H51750b51605642d3a8782c7c78abb7b37-247x296.jpg"},
                    {"id":3,"title":"RELX Infinity Pods.","price":"150.000","img":"/images/flavors-01-247x296.jpg"},
                    {"id":5,"title":"Thiết bị Pod RELX Nano","price":"150.000","img":"/images/RLX-NAN10-2T-247x296.jpg"},
                    {"id":7,"title":"Hệ thống Relx Pod có sẵn 1 pod đầu tiên cho bạc hà và xì gà với quà tặng miễn phí","price":"850.000","img":"/images/Q7-247x296.png"},
                    {"id":2,"title":"Thiết bị cần thiết RELX !!","price":"700.000","img":"/images/121107905_1303006163375464_2880419985679389890_n-247x296.jpg"},
                    {"id":4,"title":"RELX Infinity (RELX thế hệ thứ 4).","price":"900.000","img":"/images/Edm3mUcWoAkbAc8-247x296.jpg"},
                    {"id":6,"title":"Relx Pod - Pack 3 Pod Dầu Cho Relx Pod System Chính hãng","price":"350.000","img":"/images/107869413_1219610575039755_6808016479125931863_o-247x296.jpg"}
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
