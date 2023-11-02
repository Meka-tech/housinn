import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Pin from "../../images/footer/location-outline.png";
import Call from "../../images/footer/phone-outline.png";
import Mail from "../../images/footer/mail-outline.png";
import GoogleButton from "../../images/footer/google_play.png";
import AppleButton from "../../images/footer/app_store.png";
import Twiiter from "../../images/footer/x-icon.png";
import FB from "../../images/footer/facebook-icon.png";
import In from "../../images/footer/linkedin_icon.png";
import Insta from "../../images/footer/instagram-icon.png";

export const Footer = () => {
  const ContactInfo = [
    {
      contact: "7, University road, Nsukka, Enugu Nigeria. zip 900101",
      Icon: Pin
    },
    {
      contact: "+234-90 1234 5678",
      Icon: Call
    },
    {
      contact: "info@housinn.com",
      Icon: Mail
    }
  ];

  const SocialMediaData = [
    { icon: Twiiter, link: "" },
    { icon: FB, link: "" },
    { icon: In, link: "" },
    { icon: Insta, link: "" }
  ];
  return (
    <Container>
      <TopPart>
        <AboutUs>
          <TopHead>About Us</TopHead>
          <h3>
            Welcome to Housinn, your trusted partner in the world of real
            estate. We are more than just a real estate company; we are your
            gateway to finding the perfect home, the ideal investment property,
            or the most suitable buyer or tenant.
          </h3>
        </AboutUs>
        <ContactUs>
          <TopHead>Contact Us</TopHead>
          {ContactInfo.map((item, i) => {
            return (
              <Contact key={i}>
                <ContactIcon>
                  <Image src={item.Icon} alt={item.contact} />
                </ContactIcon>
                <h3>{item.contact}</h3>
              </Contact>
            );
          })}
        </ContactUs>
        <DownloadContainer>
          <TopHead>Download Our Mobile App</TopHead>
          <DownloadButtons>
            <DownloadButton href="">
              <Image src={GoogleButton} alt="googleButton" />
            </DownloadButton>
            <DownloadButton href="">
              <Image src={AppleButton} alt="appleButton" />
            </DownloadButton>
          </DownloadButtons>
        </DownloadContainer>
      </TopPart>
      <SocialMediaIcons>
        {SocialMediaData.map((social, i) => {
          return (
            <SMIcon key={i} href={social.link}>
              <Image src={social.icon} alt="icon" />
            </SMIcon>
          );
        })}
      </SocialMediaIcons>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #131b22;
  color: white;
  padding: 3.1rem 10.4rem;
  height: 42rem;
`;

const TopPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopHead = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
`;
const AboutUs = styled.div`
  width: 25%;

  h3 {
    margin-top: 1.1rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
const ContactUs = styled.div`
  width: 25%;
`;
const Contact = styled.div`
  margin-top: 2.1rem;
  display: flex;
  align-items: start;
  h3 {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;
const ContactIcon = styled.div`
  margin-right: 1.2rem;
`;

const DownloadContainer = styled.div`
  width: 26%;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 35%;
  }
`;

const DownloadButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.1rem;
`;
const DownloadButton = styled.a`
  cursor: pointer;
`;

const SocialMediaIcons = styled.div`
  width: 15%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 18%;
    margin-top: 10rem;
  }
`;

const SMIcon = styled.a`
  cursor: pointer;
`;
