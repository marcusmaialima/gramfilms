import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Main } from './style'
import HeaderGram from '../HeaderGram'
import FooterGram from '../FooterGram'
import LogoGramFilms from '../LogoGramFilms'
import ButtonGram from '../ButtonGram'
import HighlightGram from '../HighlightGram'
import LogoImersao from '../LogoImersao'

import logoAlura from '../../assets/img/imersao-alura-logo.svg'

type Props = {
  children: ReactNode
}

function PageDefault({ children }: Props) {
  return (
    <>
      <HeaderGram>
        <Link to="/">
          <LogoGramFilms />
        </Link>
        <Link to="/cadastro/video">
          <ButtonGram>Novo vídeo</ButtonGram>
        </Link>
      </HeaderGram>
      <Main>{children}</Main>
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

export default PageDefault
