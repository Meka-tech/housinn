import { FC, useState } from "react";
import styled from "@emotion/styled";
import Mark from "../../images/question-mark.png";

interface IProps {
  categoryName: string;
  categoryDetail?: string;
  select: () => void;
  radioOn?: boolean;
  mark?: boolean;
}
export const Radio: FC<IProps> = ({ categoryName, select, radioOn }) => {
  return (
    <Container>
      <RadioDiv onClick={() => select()}>{radioOn && <RadioOn />}</RadioDiv>
      <Name>{categoryName}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const RadioDiv = styled.div`
  border: 1px solid rgba(0, 42, 80, 1);
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 1rem;
    height: 1rem;
  }
`;
const RadioOn = styled.div`
  background-color: rgba(0, 42, 80, 1);
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    width: 0.6rem;
    height: 0.6rem;
  }
`;
const Name = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 1.6rem;
  margin-left: 0.5rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;
