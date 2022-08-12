import { FunctionComponent, PropsWithChildren } from "react";
import Container from "../Container";
import Header from "../Header";
// import { GeneralLayout } from "./styled";
const Layout: FunctionComponent<PropsWithChildren> = (layoutProps) => {
  const { children, ...props } = layoutProps;
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Container {...props} style={{ marginTop: "1rem" }}>
        <Header />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
