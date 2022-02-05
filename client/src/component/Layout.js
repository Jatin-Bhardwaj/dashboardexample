import { Outlet , Link } from 'react-router-dom';

export default function Layout() {
  return (
      <>
      <nav>
          <ul>
              <li>
                  <Link to="/home">Home</Link>
              </li>
              <li>
                  <Link to="/doughnutdemo">Doughnut</Link>
              </li>
              <li>
                  <Link to="/doughnutdemo2">Doughnut 2</Link>
              </li>
              <li>
                  <Link to="/linechartdemo">Line Chart</Link>
              </li>
              <li>
                  <Link to="/linechartdemo2">Line Chart 2</Link>
              </li>
              <li>
                  <Link to="/piechartdemo">Pie Chart</Link>
              </li>
          </ul>
      </nav>

      <Outlet/>

      </>
  )
}
