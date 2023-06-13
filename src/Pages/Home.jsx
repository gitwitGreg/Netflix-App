import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request' 

const Home = () => {
  return (
    <>   
    <Main />
    <Row rowID = '1' title = 'Up Coming' fetchURL={request.requestUpcoming}/>
    <Row rowID = '2' title = 'Popular' fetchURL={request.requestPopular}/>
    <Row rowID = '3' title = 'Trending' fetchURL={request.requestTrending}/>
    <Row rowID = '4' title = 'Top rated' fetchURL={request.requestTopRated}/>
    <Row rowID = '5' title = 'Horror' fetchURL={request.requestHorror}/>
    </>
  )
}

export default Home
