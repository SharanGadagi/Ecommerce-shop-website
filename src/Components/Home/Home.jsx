import React from 'react'
import Banner from '../Banner/Banner'
import AllProducts from '../AllProducts/AllProducts'

const Home = () => {
  return (
<>
<div className="home">
    <div className="homeContainer">
        <div className="banner">
            <Banner/>
            
        </div>
        <div className="latestAllProduct">
        <AllProducts/>
        </div>
    </div>
</div>
</>
  )
}

export default Home
