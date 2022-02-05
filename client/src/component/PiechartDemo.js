import {useEffect,useState} from 'react';
import { Pie } from 'react-chartjs-2';
import Axios from 'axios';

export default function PiechartDemo() {
   const [productItemLists,setProductItemLists] = useState([]);
   
   useEffect(()=>{
       const getProductItemLists = async () =>{
           await Axios.get('http://localhost:3001/products/items').then((response)=>{
                setProductItemLists(response.data);
           })
       }
       getProductItemLists();
   },[])

   const productItemDatabase = [];
   const productItemLabel    = [];

   productItemLists.map((val,key)=>{
       return (
           productItemDatabase.push(`${val.Units}`),
           productItemLabel.push(`${val.Item}`)
       )
   })

   const data = {
    labels: [...productItemLabel],
    datasets: [
      {
        label: '# of Votes',
        data: [...productItemDatabase],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
      //    'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
       //   'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  

  return (
  <div style={{width:"500px" ,margin :"0 auto"}}>
      <Pie data={data}/>
  </div>
  )
}
