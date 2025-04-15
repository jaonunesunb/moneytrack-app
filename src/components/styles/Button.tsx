import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.active ? '#0078d4' : '#f0f0f0')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.active ? '#005a99' : '#eaeaea')};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.3);
  }
`;

export default Button;
