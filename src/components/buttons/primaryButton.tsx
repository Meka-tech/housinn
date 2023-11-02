import React, { FC } from "react";
import styled from "@emotion/styled";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: boolean;
}
export const PrimaryButton: FC<IProps> = ({
  text = "Button",
  variant,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  background-color: rgba(0, 42, 80, 1);
  border-radius: 5px;
  padding: 1.1rem 1rem;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 0.8rem;
  }
`;

const Text = styled.h3`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;
