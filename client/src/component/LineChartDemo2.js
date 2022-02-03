import Axios from 'axios'

import { useEffect, useState } from 'react';

//import {Line } from 'react-chartjs-2';


// export default function LineChartDemo2(){
//     // const [binderList,setBinderList] = useState([])

//     // const getBinderList = () => {
//     //       Axios.get("http://localhost:3001/product/Binder").then((response)=>{
//     //           setBinderList(response.data);
//     //           console.log(binderList);
//     //       })  
//     // }

//     // getBinderList();
//     //  const binderDatabase = [];
//     //    {binderList.map((val,key)=>{
//     //    binderDatabase.push(`${val.Total_Units}`);
//     //   })}

//     const data = {
//        // label   : ["1-20","2-20","3-20","4-20","5-20","6-20","7-20","8-20","9-20","10-20","11-20","12-20","1-21","2-21","3-21","4-21","5-21","6-21","7-21","8-21","9-21","10-21","11-21","12-21"],
//        label:["1-20","2-20","3-20","4-20","5-20","6-20"], 
//        dataset : [
//             // {
//             //     label:"Binder",
//             //     data :[...binderDatabase],
//             //     fill: false,
//             //     borderColor: "#742774"
//             // },
//             {
//                 label: "Second dataset",
//                 data: [33, 25, 35, 51, 54, 76],
//                 fill: false,
//                 borderColor: "#742774"
//               }
//         ]
//     }

//     return( 
//         <div style={{width:"500px",margin:"0 auto"}}>

//         <Line data={data}/>
//          </div>
//     );
    
// }
// {/*     
//     {binderList.map((val,key)=>{
//         return(
//             <div>
//             <h3>Order Date : {val.Item}</h3>
//             <h3>Region : {val.Total_Units}</h3>
//             <h3>Date-Year : {val.Month_Year}</h3>
//             <h3>******************************************</h3>
//             </div>
//             )
//         })
//     } */}

import React from "react";

import { Line } from "react-chartjs-2";



export default function LineChartDemo2(){
    const [binderList,setBinderList] = useState([])


  useEffect(()=>{

    const getBinderList = async () => {
      await  Axios.get("http://localhost:3001/product/Binder").then((response)=>{
        setBinderList(response.data);
        // console.log(binderList);
      })  
    }
    getBinderList();
  },[])

     const binderDatabase = [];
       binderList.map((val,key)=>{
      return  binderDatabase.push(`${val.Total_Units}`);
      })
      const data = {
        labels: ["1-20", "2-20", "3-20", "4-20", "5-20", "6-20","7-20", "8-20", "9-20", "10-20","11-20", "12-20"],
        datasets: [
          {
            label: "Binder",
            data: [...binderDatabase],
            fill: false,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          // {
          //   label: "Pencil",
          //   data: [33, 25, 35, 51, 54, 76],
          //   fill: false,
          //   borderColor: "#742774"
          // }
        ]
      };    

  //    console.log([...binderDatabase]);
  
    return(
        <div style={{width:"500px",margin:"0 auto"}}>

       <Line data={data}/>
         
        </div>

    )
};