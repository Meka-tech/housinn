import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import AuthImage from "@/images/authImg.png";
import Logo from "@/images/Logo.png";
import XIcon from "@/images/Icons/x-icon.png";
import {
  PasswordInput,
  PrimaryButton,
  Radio,
  Tab,
  TextInput
} from "@/components";
import AppleButton from "@/images/buttons/appleButton.png";
import GoogleButton from "@/images/buttons/googleButton.png";
import SignUpGoogle from "@/images/buttons/upGoogle.png";
import SignUpApple from "@/images/buttons/upApple.png";
import { useFormik, ErrorMessage } from "formik";
import { SignInValidation, SignUpValidation } from "./authValidationSchema";
import { useRouter } from "next/router";

export default function SignIn() {
  const TabOptions = ["Sign in", "New Account"];
  const [activeTab, setTab] = useState(TabOptions[0]);
  const router = useRouter();

  const radioData = [
    "Individual",
    "Agent",
    "Property Owner",
    "Real Estate Developer"
  ];

  const SignInComp = () => {
    const formik = useFormik({
      initialValues: {
        password: "",
        email: ""
      },
      validationSchema: SignInValidation,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      }
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
      if (Object.keys(formik.errors).length === 0) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    }, [formik.errors]);
    return (
      <ComponentContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            id="email"
            type="email"
            inputlabel="Email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlurProp={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            errorMsg={formik.errors.email}
          />
          <PasswordInput
            id="password"
            inputlabel="Password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlurProp={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            errorMsg={formik.errors.password}
          />
          <ButtonContainer>
            <PrimaryButton
              text="Sign in"
              type="submit"
              disabled={Object.keys(formik.errors).length !== 0}
            />
          </ButtonContainer>
        </form>
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
    const [radioSelection, setRadioSelection] = useState("");
    const formik = useFormik({
      initialValues: {
        password: "",
        email: "",
        confirmPassword: ""
      },
      validationSchema: SignUpValidation,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      }
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
      if (Object.keys(formik.errors).length === 0 && radioSelection !== "") {
        setButtonDisabled(false);
      }
    }, [formik.errors, radioSelection]);
    console.log(Object.keys(formik.errors).length);
    return (
      <ComponentContainer>
        <form onSubmit={formik.handleSubmit}>
          <TextInput
            id="email"
            inputlabel="Email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlurProp={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            errorMsg={formik.errors.email}
          />
          <PasswordInput
            id="password"
            inputlabel="Password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlurProp={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            errorMsg={formik.errors.password}
          />
          <PasswordInput
            id="confirmPassword"
            inputlabel="Confirm Password"
            placeholder="Confirm your password"
            onChange={formik.handleChange}
            onBlurProp={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            errorMsg={formik.errors.confirmPassword}
          />
          <AccountTypeDiv>
            <ATtext>Account Type</ATtext>
            <AccountTypes>
              {radioData.map((item, i) => {
                return (
                  <Radio
                    key={i}
                    categoryName={item}
                    select={() => {
                      setRadioSelection(item);
                    }}
                    radioOn={item === radioSelection}
                  />
                );
              })}
            </AccountTypes>
          </AccountTypeDiv>
          <ButtonContainer>
            <PrimaryButton
              text="Create Account"
              type="submit"
              disabled={buttonDisabled}
            />
          </ButtonContainer>
        </form>
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
            <Image src={SignUpGoogle} alt="googleSignUp" quality={100} />
          </ExternalButton>
          <ExternalButton>
            <Image src={SignUpApple} alt="appleSignUp" quality={100} />
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
        <Xdiv onClick={() => router.back()}>
          <Image
            src={XIcon}
            alt="goBack"
            quality={100}
            width={30}
            height={30}
          />
        </Xdiv>
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
  overflow-y: auto;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 3rem 10rem;
  }
`;
const Header = styled.h3`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-bottom: 2rem;
    font-size: 2.6rem;
  }
`;
const Xdiv = styled.div`
  position: absolute;
  cursor: pointer;
  right: 5rem;
  top: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    right: 3rem;
    top: 2rem;
  }
`;
const TabContainer = styled.div``;

const ComponentContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding-top: 1.5rem;
    width: 80%;
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
  justify-content: space-evenly;
  margin-top: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 2rem;
  }
`;

const ExternalButton = styled.div`
  cursor: pointer;
  position: relative;
  transition: all ease 0.1s;

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

const AccountTypeDiv = styled.div`
  margin-top: 1rem;
`;

const ATtext = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;

const AccountTypes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
