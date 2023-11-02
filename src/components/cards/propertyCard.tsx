import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import PropertyImage from "@/images/placeholders/propertyPlaceholder.png";
import RentTag from "@/images/tags/forRent.png";
import SaleTag from "@/images/tags/forSale.png";
import CameraImg from "@/images/Icons/camera-outline.png";
import Heart from "@/images/heart.png";
import MapPin from "@/images/Icons/map-pin.png";
import BedIcon from "@/images/Icons/bed.png";
import BathIcon from "@/images/Icons/bath.png";
import LandIcon from "@/images/Icons/landSize.png";
import AddIcon from "@/images/Icons/add.png";
import ShareIcon from "@/images/Icons/share.png";
import PropertyLogo from "@/images/placeholders/lister-placeholder.png";

interface IProps {
  tagType?: string; //rent or sale
  saved?: boolean;
}
export const PropertyCard: FC<IProps> = ({
  tagType = "rent",
  saved = false
}) => {
  const [save, setSave] = useState(saved);
  return (
    <Container>
      <ImageDiv>
        <ImageTopBar>
          <Image
            src={tagType === "rent" ? RentTag : SaleTag}
            alt="tag"
            placeholder="blur"
            quality={100}
          />
        </ImageTopBar>
        <Image
          src={PropertyImage}
          alt="Property"
          placeholder="blur"
          quality={100}
        />
        <ImageBottomBar>
          <Picture>
            <Image
              src={CameraImg}
              alt="Pictures"
              placeholder="blur"
              quality={100}
            />
            <PictureCount>3</PictureCount>
          </Picture>
          <FavouriteDiv onClick={() => setSave(!save)}>
            <Image src={Heart} alt="heart" placeholder="blur" quality={100} />
          </FavouriteDiv>
        </ImageBottomBar>
      </ImageDiv>
      <TextDiv>
        <Price>₦ 160,000,000</Price>
        <PropertyName>Brand new Luxury 4 Bedroom duplex</PropertyName>
        <LocationDiv>
          <LocationIcon>
            <Image src={MapPin} alt="map" />
          </LocationIcon>
          <h3>Abuja, Abuja FCT, Katampe Extension, KATAMPE EXTENSION</h3>
        </LocationDiv>
        <PropertyInfo>
          <InfoItem>
            <InfoIcon>
              <Image src={BedIcon} alt="bed" quality={100} />
            </InfoIcon>
            <Info>5 Beds</Info>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <Image src={BathIcon} alt="bath" quality={100} />
            </InfoIcon>
            <Info>5 Baths</Info>
          </InfoItem>
          <InfoItem>
            <InfoIcon>
              <Image src={LandIcon} alt="bed" quality={100} />
            </InfoIcon>
            <Info>580.00 ft2</Info>
          </InfoItem>
        </PropertyInfo>
        <BottomBar>
          <ListerLogo>
            <Image src={PropertyLogo} alt="property-lister" quality={100} />
          </ListerLogo>
          <BottomIcons>
            <BottomIcon>
              <Image src={AddIcon} alt="add" quality={100} />
            </BottomIcon>
            <BottomIcon>
              <Image src={ShareIcon} alt="share" quality={100} />
            </BottomIcon>
          </BottomIcons>
        </BottomBar>
      </TextDiv>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 7px;
  background: #fff;
  box-shadow: 3px 3px 36px 2px rgba(0, 0, 0, 0.15);
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  height: 100%;
  transition: all ease-in 0.1s;
  :hover {
    z-index: 20;
    transform: scale(1.02);
  }
`;
///Image
const ImageDiv = styled.div`
  width: 100%;
  height: 65%;
  position: relative;
  img {
    height: 100%;
  }
`;
const ImageTopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
`;
const ImageBottomBar = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  height: fit-content;
`;
const Picture = styled.div`
  display: flex;
  align-items: center;
`;
const PictureCount = styled.h3`
  color: white;
  margin-left: 2px;
  font-size: 1.4rem;
  font-weight: 600;
`;
const FavouriteDiv = styled.div`
  z-index: 2;
`;

///Text
const TextDiv = styled.div`
  height: max-content;
  padding: 0.8rem 2rem;
  padding-top: 2.3rem;
  color: black;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding-top: 2rem;
    padding: 0.8rem 1.8rem;
  }
`;

const Price = styled.h2`
  color: #002a50;
  font-size: 2.4rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 2.2rem;
  }
`;
const PropertyName = styled.h3`
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;
const LocationDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: start;
  h3 {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    @media screen and (min-width: 1300px) and (max-width: 1600px) {
      font-size: 1.2rem;
    }
  }
`;
const LocationIcon = styled.div`
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
  height: 2rem;
`;
const PropertyInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;
const InfoItem = styled.div`
  margin-right: 1.2rem;
  display: flex;
`;
const InfoIcon = styled.div`
  margin-right: 0.5rem;
  img {
    height: 100%;
  }
`;

const Info = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomBar = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListerLogo = styled.div``;
const BottomIcons = styled.div`
  display: flex;
`;
const BottomIcon = styled.div`
  z-index: 5;
  margin-left: 1.4rem;
`;
