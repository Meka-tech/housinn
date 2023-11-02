import React, { FC } from "react";
import styled from "@emotion/styled";
import SearchIcon from "../../images/inputSearch.png";
import Image from "next/image";

interface IProps extends React.ButtonHTMLAttributes<HTMLInputElement> {}
export const SearchInput: FC<IProps> = ({ ...rest }) => {
  return (
    <Container>
      <Input {...rest} />
      <SearchButton>
        {" "}
        <Image src={SearchIcon} alt="search" />
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 2.4rem 3.2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 2rem 2.8rem;
  }
`;

const Input = styled.input`
  width: 85%;
  background-color: transparent;
  outline: none;
  border: none;
  color: black;
  font-size: 1.6rem;
  font-weight: 400;
  ::placeholder {
    color: #a3a3a3;
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;

const SearchButton = styled.div`
  cursor: pointer;
`;
