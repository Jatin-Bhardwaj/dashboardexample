import  { Doughnut } from 'react-chartjs-2';

const data ={
    labels : ["Red","Blue","Yellow","Green","Purple","Orange","Black"],
    datasets:[
        {
        data:[12,19,3,4,5,6,100],
        backgroundColor:[
            "red",
            "blue",
            "yellow",
            "green",
            "purple",
            "orange",
            "black"
        ]
        }
            ]
}

function DoughnutDemo(){
    return (
        <div>
            <h1>Doughnut Chart </h1>
            <div style={{width:"500px",margin:"0  auto"}}>

            <Doughnut data={data}/>
            </div>
        </div>
    )
}

export default  DoughnutDemo;