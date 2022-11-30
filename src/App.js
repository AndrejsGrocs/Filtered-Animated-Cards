
import './App.css';
import {useState, useEffect} from 'react'
import Movie from '../src/movie'
import Filter from '../src/Filter'




function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)


  useEffect(()=>{
    fetchPopular()
  },[])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
    console.log(movies)
    

  }


 
  return (
    <div className="App">
    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        <div className='pop-movies'>
        
          {filtered.map((movie)=>{
            return <Movie key={movie.id} movie={movie}/>
          })}

        </div>
    </div>
  );
}

export default App;
