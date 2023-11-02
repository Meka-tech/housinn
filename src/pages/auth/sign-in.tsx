import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import AuthImage from "@/images/authImg.png";
import Logo from "@/images/Logo.png";
import { PasswordInput, PrimaryButton, Tab, TextInput } from "@/components";
import AppleButton from "@/images/buttons/appleButton.png";
import GoogleButton from "@/images/buttons/googleButton.png";

export default function SignIn() {
  const TabOptions = ["Sign in", "New Account"];
  const [activeTab, setTab] = useState(TabOptions[0]);

  const SignInComp = () => {
    return (
      <ComponentContainer>
        <TextInput inputlabel="Email" placeholder="Enter your email" />
        <PasswordInput
          inputlabel="Password"
          placeholder="Enter your password"
        />
        <ButtonContainer>
          <PrimaryButton text="Sign in" />
        </ButtonContainer>
        <ForgotPasswordDiv>
          <h2>Forgot Password</h2>
        </ForgotPasswordDiv>
        <OrDiv>
          <div /> <h3>or</h3> <div />
        </OrDiv>
        <Buttons>
          <ExternalButton>
            <Image src={GoogleButton} alt="googleLogin" quality={100} />
          </ExternalButton>
          <ExternalButton>
            <Image src={AppleButton} alt="appleLogin" quality={100} />
          </ExternalButton>
        </Buttons>
      </ComponentContainer>
    );
  };
  const NewComp = () => {
    return (
      <ComponentContainer>
        <TextInput inputlabel="Email" placeholder="Enter your email" />
        <PasswordInput
          inputlabel="Password"
          placeholder="Enter your password"
        />
        <PasswordInput
          inputlabel="Confirm Password"
          placeholder="Confirm your password"
        />
        <ButtonContainer>
          <PrimaryButton text="Create Account" />
        </ButtonContainer>
        <TandC>
          By submitting, I accept Housinn’s{" "}
          <span style={{ color: "#002A50", fontWeight: "600" }}>
            terms of use
          </span>
        </TandC>
        <OrDiv>
          <div /> <h3>or</h3> <div />
        </OrDiv>
        <Buttons>
          <ExternalButton>
            <Image src={GoogleButton} alt="googleLogin" quality={100} />
          </ExternalButton>
          <ExternalButton>
            <Image src={AppleButton} alt="appleLogin" quality={100} />
          </ExternalButton>
        </Buttons>
      </ComponentContainer>
    );
  };
  return (
    <Container>
      <SideImage>
        <LogoDiv>
          <Image src={Logo} alt="logo" quality={100} />
        </LogoDiv>
        <Image
          src={AuthImage}
          alt="auth image"
          quality={100}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
        />
      </SideImage>
      <Main>
        <Header>Welcome To Housinn</Header>
        <TabContainer>
          <Tab options={TabOptions} activeTab={activeTab} setTab={setTab} />
        </TabContainer>
        {activeTab === "Sign in" ? <SignInComp /> : <NewComp />}
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
`;
const SideImage = styled.div`
  width: 40%;
  height: 100vh;
  position: relative;
`;
const LogoDiv = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  top: 5%;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 60%;
  height: 100%;
  padding: 5rem 15rem;
  color: black;
  position: relative;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 3rem 10rem;
  }
`;
const Header = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-bottom: 2rem;
    font-size: 2.6rem;
  }
`;
const TabContainer = styled.div``;

const ComponentContainer = styled.div`
  width: 65%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding-top: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 4rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 3rem;
  }
`;
const ForgotPasswordDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  margin-top: 2rem;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 1.6rem;
  }
  h2 {
    text-align: center;
    color: #002a50;
    font-size: 1.6rem;
    font-weight: 600;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.4rem;
    }
  }
`;
const OrDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  div {
    height: 0.1rem;
    width: 48%;
    background-color: #cdcdcd;
  }
  h3 {
    color: #cdcdcd;
    font-size: 1.4rem;
    font-weight: 600;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.2rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 2rem;
  }
`;

const ExternalButton = styled.div`
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
  transition: all ease 0.1s;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-bottom: 1rem;
  }

  :hover {
    transform: scale(1.02);
  }
  img {
    object-fit: fill;
  }
`;

const TandC = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  font-weight: 400;
  margin-top: 2rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
    margin-top: 1.6rem;
  }
`;
