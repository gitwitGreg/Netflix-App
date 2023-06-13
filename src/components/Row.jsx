import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])
    
    const slideLieft = () => {
        var slider  = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider  = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <>
    <h2 className='categoryName'>{title}</h2>
    <div className='categoryMovies'>
        <MdChevronLeft className='directionalButtons' size={40}  onClick={slideLieft}/>
        <div id={'slider' + rowID} className='sliderStyle'>
            {movies.map((item, id) => (
                <Movie key={id} item={item} />
            ))}
        </div>
        <MdChevronRight className='directionalButtonsr' size={40} onClick={slideRight} />
    </div>
    </>
  )
}

export default Row
