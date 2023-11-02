import React, { FC } from "react";
import styled from "@emotion/styled";
import ProfileImg from "@/images/placeholders/null-profile.png";
import Image from "next/image";

interface IProps {
  name: string;
  location: string;
  review: string;
}
export const ReviewCard: FC<IProps> = ({ name, location, review }) => {
  return (
    <Container>
      <TopPart>
        <ProfileImage>
          <Image src={ProfileImg} alt="profileImg" />
        </ProfileImage>
        <UserInfo>
          <h2>{name}</h2>
          <h3>{location}</h3>
        </UserInfo>
      </TopPart>
      <UserReview>&quot;{review}&quot;</UserReview>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 7px;
  box-shadow: 3px 3px 31px -9px rgba(0, 0, 0, 0.25);
  height: 35rem;
  width: 100%;
  padding: 3.2rem 4.8rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 30rem;
    padding: 2.8rem 3rem;
  }
`;
const TopPart = styled.div`
  display: flex;
`;
const ProfileImage = styled.div``;

const UserInfo = styled.div`
  margin-left: 1.6rem;
  h2 {
    color: black;
    font-size: 1.6rem;
    font-weight: 600;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.4rem;
    }
  }
  h3 {
    color: #a3a3a3;
    font-size: 1.4rem;
    font-weight: 400;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.2rem;
    }
  }
`;
const UserReview = styled.p`
  margin-top: 5rem;
  color: #002a50;
  font-size: 1.8rem;
  font-weight: 400;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 1.5rem;
    font-size: 1.4rem;
  }
`;
