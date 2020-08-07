import styled from 'styled-components'

type Prop = {
  url: string
}

export const VideoCardContainer = styled.a`
  border: 2rem solid;
  border-radius: 4rem;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298rem;
  width: 298rem;
  height: 197rem;
  background-image: ${({ url }: Prop) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10rem;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16rem;
  transition: opacity 0.3s;
  &:after {
    content: '';
    display: block;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: auto;
    opacity: 0;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
    h2 {
      opacity: 1;
    }
  }

  &:not(:first-child) {
    margin-left: 20rem;
  }
  h2 {
    position: relative;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s;
  }
`
