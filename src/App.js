
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigationbar from './components/Navigationbar'
import Home from './components/Home'
import Medecin from './components/Medecin'
import Smedecin from './components/Smedecin';
import Seplm from './components/Seplm';
function App() {
  return (
  <>

<BrowserRouter>
    <div className="App">
    <Navigationbar/>
   
      <Routes>
        <Route path='/' element={<Home/>} />
        
        <Route path='/medecin' element={<Medecin/>} />
        <Route path='/smedecin' element={<Smedecin/>} />
        <Route path='/seplm' element={<Seplm/>} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
        
      </Routes>
    </div>
    </BrowserRouter>


  </>
  );
}

export default App;
