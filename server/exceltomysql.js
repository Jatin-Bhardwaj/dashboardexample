const xlsx = require('xlsx');

const mysql2 = require('mysql2');

//1. Take excel workbook
const wb = xlsx.readFile('./sampledata.xlsx',{cellDates:true});
//console.log(wb);

//2. Take excel worksheet
const ws = wb.Sheets['Product'];
//console.log(ws);

//3. Read Sheet Data and Convert data into JSON format
const data = xlsx.utils.sheet_to_json(ws);

// Database credentials
let connection = mysql2.createConnection({
    host     : "localhost",
    user     : "root",
    password : "1234",
    database : "sample",
})

//4. connection to make a table for database
// connection.connect((err)=>{
//     if(err) return console.error('error: '+err.message);
//     connection.query(" DROP TABLE sample.sample4",
//        (err,drop)=>{
//            //Query to create table "sample4"
//            var createStatement =
//            "CREATE TABLE sample.sample4(OrderDate DATE,Region char(50),Rep char(50),Item char(50) ,Units int ,UnitCost int ,Total int)"

//            //Creting table sample4
//            connection.query(createStatement,(err,drop)=>{
//                if(err)
//                   console.log("Error ", err);
//            });
//        }
//     )
// })
   const insertData = () =>{
       for(let i=0;i<data.length;i++){
           let OrderDate = data[i]['OrderDate']
               Region    = data[i]['Region'],
               Rep       = data[i]['Rep'],
               Item      = data[i]['Item'],
               Units     = data[i]['Units'],
               UnitCost  = data[i]['UnitCost'],
               Total     = data[i]['Total']

            var insertStatement =
            `INSERT INTO sample.sample4 values (?,?,?,?,?,?,?)`;
            var items = [OrderDate,Region,Rep,Item,Units,UnitCost,Total];
            
            //Inserting data of current row
            //into database
            connection.query(insertStatement,items,(err,results,fields)=>{
                if(err){
                    console.log("unable to insert item at row",i+1);
                    return console.log(err);
                }
            })
       }
       console.log("All items stored into database successfully")
   }

insertData();



