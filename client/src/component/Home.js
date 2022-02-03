import { useEffect , useState } from 'react';
import Axios from 'axios';
export default function Home() {
    const [productList,setProductList] = useState([]);
useEffect(()=>{

  const getproducts = async () => {
    await Axios.get('http://localhost:3001/').then((response)=>{
      setProductList(response.data);
      //    console.log(response);
    })
  }
  getproducts();
},[])

  return( 
      <div>

  
    {productList.map((val,key)=>{
        return(
            <div>
          <h3>Order Date : {val.OrderDate}</h3>
          <h3>Region : {val.Region}</h3>
          <h3>Rep : {val.Rep}</h3>
          <h3>Item : {val.Item}</h3>
          <h3>Units : {val.Units}</h3>
          <h3>Unit Cost : {val.UnitCost}</h3>
          <h3>Total : {val.Total}</h3>
          <h3>******************************************</h3>
        </div>
              )
        })
      }
  </div>
  );
}
