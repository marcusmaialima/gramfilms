import React from 'react'

import { VideoContainer, ResponsiveIframe } from './style'

interface IYouTubeIframe {
  youtubeID: string
  title: string
}

function YouTubeIframe({ youtubeID, title }: IYouTubeIframe) {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title={title}
        src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  )
}

export default YouTubeIframe
