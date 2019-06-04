import React from 'react'
import './style.css'
const item = ({ search }) => {
    return(
        <div className='item'>
            <div className='img-container'>
                <img className='poster' src={search.Poster} alt='poster'/>
            </div> 
            <div className='def-container'>
                <div className='def'> Title : {search.Title}</div>
                <div className='def'> Year: {search.Year}</div>
                <div className='def'> Type: {search.Type}</div>
                <div className='def'> Imdb: {search.imdbID}</div>
            </div>
        </div>
    )
}

export default item;