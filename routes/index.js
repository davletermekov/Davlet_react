var express = require('express');
var router = express.Router();
const { Pool } = require('pg');



const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'Students',
  user: 'postgres',
  password: 'postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})


router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Express' });
});

/* GET home page. */
router.get('/getlist', function(req, res, next) {
	pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`SELECT * FROM stud `,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }

      
        res.send(result.rows);
      });
      })

});


router.get('/getstmessage', function(req, res, next) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`Select * from message Where id_stud = ${req.query.id_st}`,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }

        console.log(result.rows);
        res.send(result.rows);
      })
      })

});

  router.get('/getstinfo', function(req, res, next) {
  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`Select CONCAT(fam , ' ', name) As fio from stud Where id_stud = ${req.query.istf}`,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }


        console.log(result.rows);
        res.send(result.rows);
      })
      })

});

  router.get('/sendmessage', function(req, res, next) {

  pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack)
    }
    client.query(`INSERT INTO public.message(id_stud, mes_text) VALUES(${req.query.stud_id}, '${req.query.messag}');`,
      (err, result) => {
        release()
        if (err) {
          return console.error('Error executing query', err.stack)
        }

        res.send("asdkjmlsd");
      })
      })

});


module.exports = router;
