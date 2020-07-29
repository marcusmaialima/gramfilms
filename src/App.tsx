import React from 'react'
import LogoGramFilms from './components/LogoGramFilms'
import HeaderGram from './components/HeaderGram'
import ButtonGram from './components/ButtonGram'
import FooterGram from './components/FooterGram'
import LinkGram from './components/LinkGram'
import HighlightGram from './components/HighlightGram'

function App() {
  return (
    <>
      <HeaderGram>
        <LogoGramFilms />
        <ButtonGram>Novo vídeo</ButtonGram>
      </HeaderGram>

      <FooterGram>
        <LogoGramFilms />
        <p>
          Site feito na <HighlightGram>#ImersãoReact</HighlightGram> {' '}
          <LinkGram href='https://alura.com.br'>Alura</LinkGram>
        </p>
      </FooterGram>
    </>
  );
}

export default App;
