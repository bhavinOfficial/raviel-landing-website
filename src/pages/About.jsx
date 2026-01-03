import React from 'react'
import HeartAbout from '../Components/About/HeartAbout'
import WhatWeStandFor from '../Components/About/WhatWeStandFor'
import OurVisionAbout from '../Components/About/OurVisionAbout'
import OurMission from '../Components/About/OurMission'
import OurStory from '../Components/About/OurStory'

const About = () => {
  return (
    <>
      <HeartAbout/>
      <OurStory/>
      <WhatWeStandFor/>
      <OurMission/>
      <OurVisionAbout/>
    </>
  )
}

export default About
