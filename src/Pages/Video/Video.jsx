import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'

const Video = () => {
  return (
    <div>
      <div className="play-container">
        <PlayVideo/>
        <Recommended />
      </div>
    </div>
  )
}

export default Video