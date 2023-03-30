import './app.scss';
import Home from './pages/home';
import Second from './pages/second'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Third from './pages/third';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>    
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='2' element={<Second/>}/>
          <Route path='3' element={<Third/>}/>
        </Routes>
    </BrowserRouter> 
  );
}

export default App;
