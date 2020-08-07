import styled from 'styled-components'

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35rem;
  line-height: 1;
  margin-bottom: 16rem;
  display: inline-block;
  padding: 20rem;
  background: red;
  line-height: 1;
  border-radius: 4rem;
  @media (max-width: 800rem) {
    font-size: 18rem;
    padding: 10rem;
  }
`

export const ExtraLink = styled.a`
  margin-left: 16rem;
  text-decoration: none;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  @media (max-width: 800rem) {
    display: block;
    margin-bottom: 16rem;
    margin-left: 0;
  }
`

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32rem;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16rem;
  }
`

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197rem;
  margin-left: 5%;
  margin-bottom: 16rem;
  margin-top: 16rem;
`
