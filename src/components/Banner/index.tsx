import React from "react";
import VideoIframe from "./components/VideoIframe";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
  Title,
  Description,
  Item
} from './style';

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

interface IBannerMain {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

export default function BannerMain({ videoTitle, videoDescription, url }: IBannerMain) {
    
    const youTubeID = getYouTubeId(url)
    const bgUrl: string = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`

    return(
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <Item>
                    <Title>{videoTitle}</Title>
                    <Description>{videoDescription}</Description>
                </Item>

                <Item>
                    <VideoIframe
                        youtubeID={youTubeID}
                        title={videoTitle}
                    />
                    <WatchButton>Assistir</WatchButton>
                </Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    )
}
