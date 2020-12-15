// https://viblo.asia/p/dua-du-lieu-len-may-voi-mongodb-atlas-aWj53L1YK6m
// https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/
//https://phoenixnap.com/kb/mysql-docker-container
//https://techfinally.com/huong-dan-cai-dat-mysql-va-phpmyadmin-tren-docker/

const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass",
    database: "vandb"
  });

module.exports = { 
            con ,            
}