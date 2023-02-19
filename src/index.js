import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import App from './App';
import Kinhdoanh from './component/Kinhdoanh';
import Home from './component/Page/Home';
import Xuatban from './component/Xuatban';
import Hook from './component/Baitap/Bai1_1/Hook';
import reportWebVitals from './reportWebVitals';
import A from './component/Baitap/Bai1_2/A';
import Register from './component/Baitap/form/Register';
import Login from './component/Baitap/form/Login';
import Aaxios from './component/Baitap/Axios/Aaxios';
import Axios2 from './component/Baitap/Axios2/Aaxios2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path='/' element= {<Home/>}/>
          <Route path='/Xuatban' element= {<Xuatban/>}/>
          <Route path='/Kinhdoanh' element= {<Kinhdoanh/>}/>
          <Route path='/baitap1_1' element= {<Hook/>}/>
          <Route path='/baitap1_2' element= {<A/>}/>
          <Route path='/Register' element= {<Register/>}/>
          <Route path='/Login' element= {<Login/>}/>
          <Route path='/Axios' element= {<Aaxios/>}/>
          <Route path='/Axios2' element= {<Axios2/>}/>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
