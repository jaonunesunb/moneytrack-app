import styled from 'styled-components';

interface ButtonProps {
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.active ? 'var(--primary-color)' : 'var(--button-bg)'};
  color: ${(props) => (props.active ? 'white' : 'var(--text-color)')};
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
     background-color: ${(props) =>
      props.active ? 'var(--primary-color-hover)' : 'var(--button-hover-bg)'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 120, 212, 0.3);
  }
`;

export default Button;
