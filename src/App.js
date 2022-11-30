
import './App.css';
import {useState, useEffect} from 'react'



function App() {



  useEffect(()=>{
    fetchPopular()
  },[])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = await data.json()

  }


 
  return (
    <div className="App">
        <h1>APP JS</h1>
        <p>Test changes</p>
    </div>
  );
}

export default App;
