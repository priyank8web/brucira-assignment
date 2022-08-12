import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;
export const LogoContainer = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
export const LogoText = styled.span`
  color: black;
  font-size: 1.3rem;
  margin-left: 0.625rem;
`;
export const LinkContainer = styled.nav`
  display: flex;
  flex-direction: row;
`;
export const LinkText = styled.span`
  color: black;
`;
export const LinkTextContainer = styled.a`
  font-family: ${({ theme }) => theme.fonts[0]};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
/* margin-right: ${(props) => (props.multiple ? "2.45rem" : "2.5rem")}; */
