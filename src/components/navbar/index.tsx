import React from "react";
import styled from "@emotion/styled";
import Logo from "../../images/Logo.png";
import Heart from "../../images/heart.png";
import Image from "next/image";
import { PrimaryButton } from "..";
import Link from "next/link";

export const Navbar = () => {
  const nav = [
    { name: "Buy", link: "" },
    { name: "Rent", link: "" },
    { name: "Sell", link: "" },
    { name: "Agency", link: "" }
  ];
  return (
    <Body>
      <NavItems>
        {nav.map((item, i) => {
          return (
            <NavItem key={i}>
              <Link href={item.link}>{item.name}</Link>
            </NavItem>
          );
        })}
      </NavItems>
      <LogoContainer>
        <Image src={Logo} alt="logo" />
      </LogoContainer>
      <AuthContainer>
        <HeartContainer>
          {" "}
          <Image src={Heart} alt="heart" />
        </HeartContainer>
        <SignInButton>
          <Link href={"/auth/sign-in"}>
            <PrimaryButton text="Sign In" />
          </Link>
        </SignInButton>
      </AuthContainer>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  padding: 1.5rem 10.4rem;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 1rem 8rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  width: 20%;
`;

const NavItem = styled.h2`
  color: white;
  margin-right: 2.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;
const LogoContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  img {
    width: 12.4rem;
    height: auto;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      width: 10rem;
    }
  }
`;

const AuthContainer = styled.div`
  justify-content: end;
  width: 20%;
  display: flex;
  align-items: center;
`;
const SignInButton = styled.div`
  width: fit-content;
`;
const HeartContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.6rem;
  cursor: pointer;
`;
