import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/PlayVideo/PlayVideo'

const Video = () => {
  return (
    <div>
      <div className="play-container">
        <PlayVideo/>
      </div>
    </div>
  )
}

export default Video