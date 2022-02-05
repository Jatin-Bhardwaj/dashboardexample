import { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import Axios from 'axios'



export default function LineChartDemo2(){
    const [binderList,setBinderList] = useState([])
    const [pencilList,setPencilList] = useState([])
    const [penList,setPenList] = useState([])
    const [deskList,setDeskList] = useState([])
    const [pensetList,setPensetList] = useState([])
    


  useEffect(()=>{

    const getBinderList = async () => {
      await  Axios.get("http://localhost:3001/product/Binder").then((response)=>{
        setBinderList(response.data);
        // console.log(binderList);
      })  
    }
    getBinderList();

    const getPencilList = async () => {
      await  Axios.get("http://localhost:3001/product/Pencil").then((response)=>{
        setPencilList(response.data);
        // console.log(binderList);
      })  
    }
    getPencilList();

  },[])

  const labelsData = ["01-20", "02-20", "03-20", "04-20", "05-20", "06-20","07-20", "08-20", "09-20", "10-20","11-20", "12-20", "01-21", "02-21", "03-21", "04-21", "05-21", "06-21","07-21", "08-21", "09-21", "10-21","11-21", "12-21"]
  //const binderLabel = ["2-20", "3-20", "4-20", "3-21", "4-21"];
  //const binderDatabase =[65,8,32,9,12]; 
  
  const binderLabel = [];
  const binderDatabase = [];
  binderList.map((val,key)=>{
    return (
     binderLabel.push(`${val.Month_Year}`),
     binderDatabase.push(`${val.Total_Units}`)
    )
  })
  
  //  for(let i=0;i<binderLabel.length;i++){
    //    console.log(binderLabel[i]);
    //    console.log(typeof binderLabel[i]);
    //  }
    
   const binderDatabase2 = [];
   const completeBinderdatabase = () =>{
   var j=0;
     for(let i=0 ;i<labelsData.length;i++){
       if(binderLabel[j]===labelsData[i]){
         binderDatabase2[i]=binderDatabase[j];
         // console.log(j);
         j=j+1;
        }else{
          binderDatabase2[i]=0;
          //  console.log(i);
        }
      }
    }
      completeBinderdatabase();
  //  for(let i=0;i<binderDatabase2.length;i++){
  //    console.log(binderDatabase[i]);
  //    console.log(binderDatabase2[i]);
  //  }

  const pencilLabel = [];
  const pencilDatabase = [];

  pencilList.map((val,key)=>{
    return( pencilLabel.push(`${val.Month_Year}`),
            pencilDatabase.push(`${val.Total_Units}`)
          )
  })
  
   const pencilDatabase2 = [];
   const completePencildatabase = () =>{
   var j=0;
     for(let i=0 ;i<labelsData.length;i++){
       if(pencilLabel[j]===labelsData[i]){
         pencilDatabase2[i]=pencilDatabase[j];
         // console.log(j);
         j=j+1;
        }else{
          pencilDatabase2[i]=0;
          //  console.log(i);
        }
      }
    }
      completePencildatabase();


      const data = {
        labels: [...labelsData],
       // labels : [...binderLabel],
        datasets: [
          {
            label           : "Binder",
          //  labels          : [...binderLabel],
            data            : [...binderDatabase2],
            fill            : false,
            backgroundColor : "rgba(75,192,192,0.2)",
            borderColor     : "rgba(75,192,192,1)"
          },
          {
            label: "Pencil",
            data: [...pencilDatabase2],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };    

  //    console.log([...binderDatabase]);
  
    return(
        <div style={{width:"800px",margin:"0 auto"}}>

       <Line data={data}/>
         
        </div>

    )
};