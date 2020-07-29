import styled from 'styled-components';

const ButtonGram = styled.button`
    padding: 18px 40px;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    border: 1px solid var(--color-gray-light);
    border-radius: 4px;
    font-size: 18rem;
    cursor: pointer;
    transition: transform 500ms ease-in-out, color 500ms linear;

    &:hover {
        transform: scale(1.02);
        color: var(--color-primary-red);
    }
`;

export default ButtonGram;