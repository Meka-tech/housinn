import React, { FC } from "react";
import styled from "@emotion/styled";
import { LoadingLottie, LoadingVariantLottie } from "@/animation";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: boolean;
  loading?: boolean;
}
export const PrimaryButton: FC<IProps> = ({
  text = "Button",
  variant,
  loading,
  ...rest
}) => {
  return (
    <Container {...rest} variant={variant}>
      {loading ? (
        <div>{variant ? <LoadingVariantLottie /> : <LoadingLottie />}</div>
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  );
};

interface IButtonProps {
  variant?: boolean;
}
const Container = styled.button<IButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant ? "rgba(0, 42, 80, 0.10)" : "rgba(0, 42, 80, 1)"};
  border-radius: 5px;
  padding: 1.1rem 1rem;
  color: ${(props) => (props.variant ? "rgba(0, 42, 80, 1)" : "white")};
  border: ${(props) => props.variant && "1px solid rgba(0, 42, 80, 1)"};
  transition: all ease 0.1s;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    padding: 0.8rem 0rem;
  }
  :disabled {
    color: #838383;
    background-color: #d1d1d1;
  }
  :active {
    transform: scale(0.98);
  }
`;

const Text = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;
