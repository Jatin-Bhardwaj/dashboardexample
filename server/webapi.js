//express 
const express  = require('express');
const app      = express();
const mysql2   = require('mysql2');
const cors     = require('cors');

const PORT = 3001;

const connection = mysql2.createConnection({
    host     : "localhost",
    user     : "root",
    password : "1234",
    database : "sample",
});

//very important line
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    connection.query('SELECT * FROM sample.sample4',(err,result)=>{
        if(err) console.log("error ocurred")
        else res.send(result);
    })
});

app.get('/orderdate',(req,res)=>{
    connection.query(`SELECT OrderDate from sample.sample4`,(err,result)=>{
         if(err) console.log("error occured")
         else res.send(result);
    })
});

app.get('/units',(req,res)=>{
    connection.query(`SELECT Units FROM sample.sample4`,(err,result)=>{
        if(err) console.log("error occured");
        else res.send(result);
    })
})

app.get('/total',(req,res)=>{
    connection.query(`SELECT Total FROM sample.sample4`,(err,result)=>{
        if(err) console.log("error occured")
        else res.send(result);
    })
});

app.get('/product/:item',(req,res)=>{
    const item = req.params.item;
    connection.query(`SELECT Item,sum(units) as Total_Units,date_format(OrderDate,'%m-%y') as "Month_Year" FROM sample.sample4 
    where Item = "${item}"
    group by month(OrderDate)
    order by year(OrderDate),month(OrderDate)`,(err,result)=>{
        if(err) console.log("error occured")
        else res.send(result);
    })
})

app.get('/products/items',(req,res)=>{
    connection.query(`SELECT Item, sum(Units) as Units FROM sample.sample4 group by Item`,(err,result)=>{
        if(err) console.log("error occured")
        else res.send(result);
    })
})

app.listen(PORT,()=>{
    console.log(`connection listening in ${PORT} ...`);
})