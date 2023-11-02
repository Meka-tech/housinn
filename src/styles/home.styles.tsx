import styled from "@emotion/styled";

export const Body = styled.div`
  width: 100vw;
  background-color: white;
  max-width: 1000rem;
`;
export const HeroSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  position: relative;
  max-height: 150rem;
`;
export const Banner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
export const HeroBody = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WelcomeText = styled.h1`
  position: relative;
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  color: white;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 5rem;
  }
`;
export const TextUnderline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  img {
    width: 12rem;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
`;
export const NewListingsSection = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 2.4rem 0;
`;
export const NewListingsTopBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-bottom: 4rem;
  }
`;
export const NewListingsHeader = styled.h2`
  color: #000;
  font-size: 3.6rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 2.8rem;
  }
`;
export const NewListingsTab = styled.div`
  width: 30%;
`;
export const NewListingsCards = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 40rem 40rem 40rem;
  grid-template-rows: auto;
  grid-row-gap: 2.4rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    grid-template-columns: 35rem 35rem 35rem;
    grid-row-gap: 3rem;
  }
`;
export const NewListingsButton = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
`;
export const AboutUsSection = styled.div`
  margin-top: 5rem;
  width: 100%;
  background: #002a50;
  padding: 2rem 10.4rem;
  display: flex;
  justify-content: space-between;
`;
export const AboutUsText = styled.div`
  width: 60%;
  color: white;
  h3 {
    font-size: 3.2rem;
    font-weight: 600;
    margin-top: 0.4rem;
  }
  p {
    margin-top: 2rem;
    font-size: 1.6rem;
    font-weight: 400;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    h3 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
export const PropertyDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;
export const Property = styled.div`
  text-align: center;
`;
export const PropertyNumber = styled.h2`
  font-size: 6.4rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 5.4rem;
  }
`;
export const PropertyIdentifier = styled.h4`
  font-size: 1.8rem;
  font-weight: 400;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;
export const VertcalLine = styled.div`
  width: 0.5rem;
  height: 9.5rem;
  background-color: white;
  border-radius: 5px;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 8rem;
  }
`;

export const AboutUsImage = styled.div``;
export const ReviewsSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-top: 7.1rem;
`;
export const ReviewsHeader = styled.h2`
  color: #002a50;
  font-size: 3.6rem;
  font-weight: 600;
  text-align: center;
`;
export const Reviews = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-row-gap: 5rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-top: 4rem;
`;
export const SquiglyLine = styled.div`
  position: absolute;
  top: -10rem;
  left: -5.5rem;
  img {
    width: 5rem;
    height: auto;
  }
`;
export const SquiglyLineTwin = styled.div`
  position: absolute;
  bottom: -10rem;
  right: -5.5rem;
  transform: rotate(180deg);
  img {
    width: 5rem;
    height: auto;
  }
`;
export const ReviewButton = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  margin-top: 8.2rem;
`;
export const GetOurApp = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  margin-bottom: 34.5rem;
  margin-top: 8.3rem;
  border-radius: 36px;
  background: #fff;
  box-shadow: 2px -2px 41px -11px rgba(0, 0, 0, 0.25);
  min-height: 51.6rem;
  padding-top: 7.6rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
`;

export const GOATextDiv = styled.div`
  margin-left: 8.9rem;
  width: 40%;
  max-width: 50rem;
  h2 {
    color: #002a50;
    font-size: 3.6rem;
    font-weight: 700;
  }
  h3 {
    color: black;
    font-size: 18px;
    font-weight: 400;
    margin-top: 2rem;
  }
`;
export const AppButtons = styled.div`
  margin-top: 5rem;
  width: 75%;
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 90%;
  }
`;
export const AppButton = styled.a``;

export const GOAImage = styled.div`
  margin-top: auto;
`;
