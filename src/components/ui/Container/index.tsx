import styled from "styled-components";
export default styled.div<{ type?: "default" }>`
  position: relative;
  margin: 0 auto;
  width: 100%;
  /* overflow: hidden; */
  z-index: 0;
  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100vw - 80px);
    min-width: calc(100vw - 80px);
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100vw - 160px);
    min-width: calc(100vw - 160px);
  }
  @media ${({ theme }) => theme.device.laptopL} {
    width: 1280px;
    min-width: 1280px;
  }
`;
