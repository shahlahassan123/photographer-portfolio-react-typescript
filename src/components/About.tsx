import * as React from 'react'
import Nav from './Nav'

const About = () => {
  return (
    <div className='App'>
        <Nav />
        <div className="about">
        <h1>About Me</h1>
        <div className="containers">
        <div className="desc-container">
          <p className='desc'>
            I am Rahil Bassim. I like to capture people's smile  and make them feel special. My passion is in photography. Also, I am a driven and ambitious MBA candidate at Kellogg School of Management, where I serve as an elected board member of the Kellogg Student Association. 
          </p>
        </div>
        <div className="photo-container">
          <img src='./photograper.jpeg' alt="photographer" className='photo' />
          {/* <img src='./photographer2.png' alt="photographer" className='photo' />
          <img src='./Photographer3.png' alt="photographer" className='photo' /> */}
         </div>

        </div>
       
         
        </div>
    </div>
  )
}

export default About
