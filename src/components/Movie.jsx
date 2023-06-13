import React from 'react'
import { useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const Movie = ({item}) => {
    const [like, setLike] = useState(false);
  return (
    <div className='categoryImages'>
    <img className='categoryImgStyle' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
    <div className='overlay'>
    <p className='mtitles'>
        {item?.title}
    </p>
    <p>
        {like ? <FaHeart className='hearts' /> : <FaRegHeart className='hearts'/>}
    </p>
</div>
</div>
  )
}

export default Movie
