var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var url = bodyParser.urlencoded({ extended: false })

const mysql = require('mysql');
const crypto = require('crypto');
const secret = 'abcdefg';

const fileUpload = require('express-fileupload');
app.use(fileUpload());

// include ini untuk bisa menampilkan semua file foto di public
app.use(express.static(__dirname));
///////////////////////////////////////////////////////////////

// Untuk membuat unic id (permili second)
// var uniqid = require('uniqid');
/////////////////////////////////////////////


// untuk include cors (semua orang bisa akses)
var cors = require('cors')
app.use(cors());

// boddy parser yang kita terima berbentuk json dari react jadi harus di include
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'db_scp'
});

db.connect();

//login user cookies
app.get('/', (req, res)=> {
  res.send('Halaman Dasboard')
});

app.post('/userlogin', (req, res) => {
  var Email =req.body.email;
  var Password =req.body.password;
  var encpass = crypto.createHash('sha256', secret).update(Password).digest('hex');

  // console.log(Email)
  console.log(encpass)
  var sql = `SELECT id_user,email,password FROM tbl_user`;
  db.query(sql, (error, result) => {
      if(error) {
          throw error;
      } else { 
          for(var i=0; i < result.length; i++ ){
              if(Email === result[i].email && encpass === result[i].password){
                console.log('Login Berhasil')
                //console.log(result[i].id)
                var userID= result[i].id_user;
                res.send((userID).toString());
                break;  
              } 
              else if (i === result.length - 1) {                   
                  res.send('1')
              }
          }
      }
  });
});
//akhir login


app.listen(8002, () => {
  console.log('Server started at port 8002 for Client UI...')
});