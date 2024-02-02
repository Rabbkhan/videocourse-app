import React from 'react'

const VideoPlayer = ({videoUrl}) => {
  return (
    <div>
<video width={1000}
height={250} controls className='rounded-sm'>
    <source src={videoUrl} type='video/mp4'/>
</video>


    </div>
  )
}

export default VideoPlayer