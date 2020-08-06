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

  @media (max-width: 799px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: var(--color-gray-light);
    color: var(--color-black-dark);
    font-weight: bold;
    border: none;

    &:hover {
      transform: none;
    }
  }
`

export default ButtonGram
