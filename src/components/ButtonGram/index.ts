import styled from 'styled-components'

const ButtonGram = styled.button`
  padding: 18px 40px;
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);
  border: 1px solid var(--color-gray-light);
  font-size: 18rem;
  cursor: pointer;
  transition: transform 500ms cubic-bezier(0.81, 0.51, 0.74, 1.51);

  &:hover {
    transform: scale(1.02);
  }
`

export default ButtonGram
