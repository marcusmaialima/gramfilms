import styled from 'styled-components';
import LogoGramFilms from '../LogoGramFilms'

const FooterGram = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    font-size: 16rem;
    padding: 20rem 0;
    border-top: 4px solid var(--color-primary-medium);

    & > ${LogoGramFilms} {
        margin-bottom: 20rem;
    }

    @media(max-width: 800px) {
        margin-bottom: 57rem;
        font-size: 14rem;
    }
`

export default FooterGram