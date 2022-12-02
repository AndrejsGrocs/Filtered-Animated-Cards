
import './App.css';
import {useState, useEffect, useReducer} from 'react'
import Movie from '../src/movie'
import Filter from '../src/Filter'
import {motion, AnimatePresence} from 'framer-motion'
import Header from './Header';




function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)
  const [count, setCount] = useState(1)
 


  useEffect(()=>{
    fetchPopular()
  },[])

  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${count}`)
    const movies = await data.json()
    setPopular(movies.results)
    setFiltered(movies.results)
    console.log(movies)
    
    

  }

  const next = (e) => {
    setCount(count + 1);
    console.log('Function is working', count)
  };

  const previous = () => {
    setCount(count - 1);
    console.log('Function is working', count)
  };
 
  return (
    <>
    <Header/>
    <div className="App">

    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
    <div className='page-button-div'>
    <button onClick={previous}>Previous</button>
    <h2 className='movie-title'>Page: {count}</h2>
    <button onClick={next}>Next</button>
        </div>
        <motion.div 
   
        layout className='pop-movies'>
        <AnimatePresence>
        
          {filtered.map((movie)=>{
            return <Movie key={movie.id} movie={movie}/>
          })}
          </AnimatePresence>
        </motion.div>

     
    </div>
 
    </>
  );
}

export default App;
