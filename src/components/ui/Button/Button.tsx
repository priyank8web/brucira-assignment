import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.685rem 1.6rem;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts[0]};
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 0.25rem;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`;

export default Button;
