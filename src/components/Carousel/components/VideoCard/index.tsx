import React from 'react'
import { VideoCardContainer } from './style'

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  )
}

interface IVideoCard {
  videoTitle: string
  videoURL: string
  categoryColor: string
}

function VideoCard({ videoTitle, videoURL, categoryColor }: IVideoCard) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <h2>{videoTitle}</h2>
    </VideoCardContainer>
  )
}

export default VideoCard
