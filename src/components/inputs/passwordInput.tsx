import { FC, useState } from "react";
import styled from "@emotion/styled";
import EyeOpen from "../../images/eyeOpen.png";
import EyeClose from "../../images/eyeClose.png";
import {
  EMessage,
  ErrorContainer,
  LabelDiv,
  StyledInput,
  StyledInputContainer,
  StyledInputElementContainer,
  StyledInputLabel
} from ".";
import Image from "next/image";

interface IProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  inputlabel: string;
  errorMsg?: string;
  error?: any;
  onBlurProp?: Function;
}
export const PasswordInput: FC<IProps> = ({
  inputlabel,
  error = false,
  errorMsg,
  onBlurProp,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleBlur = (e) => {
    setFocused(false);
    if (onBlurProp) {
      onBlurProp(e);
    }
  };
  return (
    <StyledInputContainer>
      <LabelDiv>
        <StyledInputLabel>{inputlabel}</StyledInputLabel>
        {error && (
          <ErrorContainer>
            <EMessage>{errorMsg}</EMessage>
          </ErrorContainer>
        )}
      </LabelDiv>
      <StyledInputElementContainer focused={focused} error={error}>
        <ExtendInput
          type={showPassword ? "text" : "password"}
          {...rest}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={handleBlur}
        />
        <EyeDiv onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Image src={EyeOpen} alt="show password" quality={100} />
          ) : (
            <Image src={EyeClose} alt="hide password" quality={100} />
          )}
        </EyeDiv>
      </StyledInputElementContainer>
    </StyledInputContainer>
  );
};

const ExtendInput = styled(
  (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <StyledInput {...props} />
  )
)`
  width: 90%;
`;
const EyeDiv = styled.div`
  cursor: pointer;
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all ease 0.1s;
  img {
    width: 80%;
    height: auto;
  }
`;
