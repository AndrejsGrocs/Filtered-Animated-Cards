import React, {useEffect} from 'react'

function Filter({setActiveGenre, activeGenre, setFiltered, popular, page, setPage }) {


    // [activeGenre] when we are running this function activeGenre is changing anytime

    useEffect(()=>{
        if(activeGenre===0){
            setFiltered(popular)
            return
        }
        const filtered = popular.filter((movie)=> movie.genre_ids.includes(activeGenre))
        setFiltered(filtered)
    }, [activeGenre])





    

  return (
    <div className='parent-filter-container'>

    
    <div className='filter-container'>
        <button className={activeGenre === 0 ? 'active' : ''} onClick={()=>setActiveGenre(0)}>All</button>
        <button className={activeGenre === 35 ? 'active' : ''} onClick={()=>setActiveGenre(35)}>Comedy</button>
        <button className={activeGenre === 28 ? 'active' : ''} onClick={()=>setActiveGenre(28)}>Action</button>
        <button className={activeGenre === 53 ? 'active' : ''} onClick={()=>setActiveGenre(53)}>Thriller</button>

        
        
       
    </div>
    </div>
  )
}

export default Filter