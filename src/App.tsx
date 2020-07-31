import React from 'react'

import LogoGramFilms from './components/LogoGramFilms'
import HeaderGram from './components/HeaderGram'
import ButtonGram from './components/ButtonGram'
import FooterGram from './components/FooterGram'
import HighlightGram from './components/HighlightGram'
import LogoImersao from './components/LogoImersao'

import logoAlura from './assets/img/imersao-alura-logo.svg'
import BannerMain from './components/Banner'
import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <>
      <HeaderGram>
        <LogoGramFilms />
        <ButtonGram>Novo vídeo</ButtonGram>
      </HeaderGram>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      <FooterGram>
        <LogoGramFilms />
        <p>
          Site feito na <HighlightGram>#ImersãoReact</HighlightGram>{' '}
          <LogoImersao
            src={logoAlura}
            alt="Imagem de um capacete com um desenho de um átomo ao centro."
          />
        </p>
      </FooterGram>
    </>
  )
}

export default App
