import React from 'react'
import {
  SPage404,
  Meme404,
  BoxPage404,
  Description
} from '../../components/Page404'
import PageDefault from '../../components/PageDefault'

import meme from '../../assets/img/img-404.png'

function Page404() {
  return (
    <PageDefault>
      <BoxPage404>
        <SPage404>
          Erro 4<Meme404 src={meme} alt="A imagem de um personagem irritado." />
          4!
        </SPage404>
        <Description>Página não encontrada</Description>
      </BoxPage404>
    </PageDefault>
  )
}

export default Page404
