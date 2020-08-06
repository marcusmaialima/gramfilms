import styled from 'styled-components'
import ButtonGram from '../ButtonGram'
import Logo from '../../assets/img/logo.png'

const HeaderGram = styled.header`
  padding: 30px 40px;
  background-color: var(--color-black-dark);
  border-bottom: 4px solid var(--color-gray-light);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;
    padding: 15px 16px;

    & > ${Logo} {
      height: 35px;
    }

    & > ${ButtonGram} {
      background-color: var(--color-gray-light);
      border-radius: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100vw;
    }
  }
`

export default HeaderGram
