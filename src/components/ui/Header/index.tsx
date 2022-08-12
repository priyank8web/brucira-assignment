import Caret from "@/Icons/Caret";
import Logo from "@/Icons/Logo";
import Link from "next/link";
import Button from "@/ui/Button";
import {
  HeaderContainer,
  LinkContainer,
  LinkText,
  LinkTextContainer,
  LogoContainer,
  LogoText,
} from "./styled";

const Links = [
  {
    path: "/",
    text: "Why Vemo",
    multiple: false,
  },
  {
    path: "/",
    text: "Products",
    multiple: true,
  },
  {
    path: "/",
    text: "Solutions",
    multiple: true,
  },
  {
    path: "/",
    text: "Company",
    multiple: false,
  },
  {
    path: "/",
    text: "Resources",
    multiple: false,
  },
];

function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <LogoContainer>
          <Logo />
          <LogoText>Vymo</LogoText>
        </LogoContainer>
      </Link>
      <LinkContainer>
        {Links.map((l, i) => (
          <Link href={l.path} passHref key={`link-${i}`}>
            <LinkTextContainer
              style={{
                marginRight: l.multiple ? "2.45rem" : "2.5rem",
              }}
              // multiple={l.multiple}
            >
              <LinkText>{l.text}</LinkText>
              {l.multiple && <Caret />}
            </LinkTextContainer>
          </Link>
        ))}
      </LinkContainer>
      <Button>Book Demo</Button>
    </HeaderContainer>
  );
}

export default Header;
