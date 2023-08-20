const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE
}).promise()
async function fetchData() {
    try {
      const [result] = await pool.query("SELECT * FROM queries");
      // console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

app.listen(8081 , ()=>{
    console.log("Listening...");
})
app.use(cors())
app.use(express.json())

app.post('/getqueries' , async (req , res )=>{
  console.log(req.body);
  const {name , phone ,email , subject , message} = req.body;
  // console.log("y");
    await pool.query('INSERT INTO queries (name , phone ,email , subject , message) VALUES (? , ? ,? , ? ,?)' , [name , phone ,email , subject , message]);
    res.json("working");
})

app.post('/getsuggetions' , async (req , res )=>{
  console.log(req.body);
  const {suggetions} = req.body;
  // console.log(suggetions);
    await pool.query('INSERT INTO suggestion (sugestion) VALUES (? )' , [suggetions]);
    res.json("working");
})