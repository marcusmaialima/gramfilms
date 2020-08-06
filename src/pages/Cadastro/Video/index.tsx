import React from 'react'
import PageDefault from 'components/PageDefault'
import Title from '../../../components/Title'
import LinkDefault from '../../../components/LinkDefault'

function CadastroVideo() {
  return (
    <PageDefault>
      <Title>Cadastro de vídeos</Title>
      <LinkDefault to="/cadastro/categoria">Cadastrar Categoria</LinkDefault>
    </PageDefault>
  )
}

export default CadastroVideo
