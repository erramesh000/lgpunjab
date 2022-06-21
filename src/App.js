
import './App.css';

import Rednavbar from './Components/Rednavbar';
import Helplinebar from './Components/Helplinebar';
import Covid from './Components/Covid';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
import Bluenavbar from './Components/Bluenavbar';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import One from './Components/demo/One';
import Two from './Components/demo/Two';
import Error from './Components/demo/Error';

const App = () => {
  return (
    
   <div className="app">
      <Rednavbar/>
      <Helplinebar/>
      <Covid/>
      <Bluenavbar/>
      <BrowserRouter>
  <Routes>
  <Route path="/" element={<One />} />
  <Route path="/Two" element={<Two />} />  
  <Route path="*" element={<Error />} />
 </Routes>
 </BrowserRouter>
 <section>
        
        </section>
      <Footer/>
    </div>
    
  );
}



export default App; 