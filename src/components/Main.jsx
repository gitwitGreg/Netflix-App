import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results);
        })
    },[])
    console.log(movie)

  return (
    <div className='main'>
        <div className='mainSection' >
        <div className='gradientSection'></div>
        <img className='mainImage' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='holding'>
            <h1 className='movieTitle'>{movie?.title}</h1>
            <div className='my-4'>
                <button class="button-23">Play</button>
                <button className= 'watchLater'>Watch Later</button>
            </div>
            <p className='movieRelease'>Relased: {movie?.release_date}</p>
            <p className='overVeiw'>{movie?.overview}</p>
        </div>
        </div>
    </div>
  )
}

export default Main
