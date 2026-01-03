import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import PeopleMake from '../Components/Home/PeopleMake'
import WhatWe from '../Components/Home/WhatWe'
import HomeMainF from '../Components/Home/HomeMainF'
import HomeCard from '../Components/Home/HomeCard'
import HomeTrusted from '../Components/Home/HomeTrusted'
import Weretrustedby from '../Components/Home/Weretrustedby'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <PeopleMake/>
      <WhatWe/>
      {/* <HomeMainF/> */}
      <HomeCard/>
      <HomeTrusted/>
      <Weretrustedby/>
    </>
  )
}

export default Home
