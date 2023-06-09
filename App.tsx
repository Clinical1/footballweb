import './app.scss';
import Home from './pages/home';
import Second from './pages/second'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Third from './pages/third';
import Four from './pages/four';
import Five from './pages/five';
import { useEffect, useState } from 'react';

function App() {
  const fetchapi=()=>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cb9b72ffdmsh672191178f9bacfp19548djsn33b7d9e09267',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    fetch(`https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=39`, options)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setresults(data.response[0].league.standings[0])
        console.log(data.response[0].league.standings[0][0].team.name)
      })
      .catch(err =>{ 
        console.log("somthing went wrongg")    
    });
  }
  const [results,setresults]=useState([])
   
  useEffect(()=>{
    fetchapi()
  },[])
  return (
   <div className='bg'>
    <BrowserRouter>
      <Navbar/>    
        <Routes>
          <Route path='/' element={<Home results={results}/>} />
          <Route path='2' element={<Second results={results}/>}/>
          <Route path='3' element={<Third results={results}/>}/>
          <Route path='4' element={<Four results={results}/>}/>
          <Route path='5' element={<Five results={results}/>}/>
        </Routes>
    </BrowserRouter> 
   </div> 
  );
}

export default App;
