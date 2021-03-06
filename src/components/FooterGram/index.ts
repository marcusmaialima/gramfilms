import styled from 'styled-components'
import LogoGramFilms from '../LogoGramFilms'

const FooterGram = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  font-size: 16rem;
  padding: 20rem 0;
  border-top: 4px solid var(--color-gray-light);

  & > ${LogoGramFilms} {
    margin-bottom: 20rem;
  }

  @media (max-width: 800px) {
    font-size: 14rem;
  }
`

export default FooterGram
