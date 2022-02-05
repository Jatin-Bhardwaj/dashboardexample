
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Home from './component/Home';
import DoughnutDemo from './component/DoughnutDemo';
import Layout from './component/Layout';
import DoughnutDemo2 from './component/DoughnutDemo2';
import LineChartDemo from './component/LineChartDemo';
import LineChartDemo2 from './component/LineChartDemo2';
import PiechartDemo from './component/PiechartDemo';

function App() {


  return (

    <div className="App">
       <Router>
         <Layout/>
         <Routes>
           <Route path="/home" element={<Home/>}/>
           <Route path="/doughnutdemo" element={<DoughnutDemo/>}/>
           <Route path="/doughnutdemo2" element={<DoughnutDemo2/>}/>
           <Route path="/linechartdemo" element={<LineChartDemo/>}/>
           <Route path="/linechartdemo2" element={<LineChartDemo2/>}/>
           <Route path="/piechartdemo" element={<PiechartDemo/>}/>

         </Routes>
       </Router>
    </div>
        )    

}

export default App;
