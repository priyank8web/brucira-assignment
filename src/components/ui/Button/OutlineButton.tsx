import styled from "styled-components";

const OutlineButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  margin-top: 1rem;
  padding: 0.685rem 1.6rem;
  font-size: 1rem;
  color: white;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts[0]};
  border: 2px solid white;
  background: transparent;
  border-radius: 0.25rem;
  &:hover {
    border-color: #dedede;
    color: #dedede;
  }
`;

export default OutlineButton;
