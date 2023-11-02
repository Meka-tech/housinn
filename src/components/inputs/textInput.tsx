import { FC, useState } from "react";
import styled from "@emotion/styled";
// import { mq } from "@/responsive";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputlabel: string;
  type?: string;
}
export const TextInput: FC<IProps> = ({
  inputlabel,
  type = "text",
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <StyledInputContainer>
      <StyledInputLabel>{inputlabel}</StyledInputLabel>
      <StyledInputElementContainer focused={focused}>
        <StyledInput
          type={type}
          {...rest}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </StyledInputElementContainer>
    </StyledInputContainer>
  );
};

export const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2.8rem;
  font-family: "Open Sans", sans-serif;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }
`;

export const StyledInputLabel = styled.label`
  color: rgba(0, 0, 0, 1);
  font-weight: 600;
  font-size: 1.6rem;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.4rem;
  }
`;
interface InputContainerStyle {
  focused: boolean;
}
export const StyledInputElementContainer = styled.div<InputContainerStyle>`
  margin-top: 1rem;
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${(props) =>
    props.focused ? "1px solid rgba(0, 42, 80, 1)" : "1px solid #D9D9D9"};
  border-radius: 4px;
  padding: 1rem;
  transition: all ease 0.5s;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    height: 3.8rem;
    margin-top: 0.5rem;
  }
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  background-color: transparent;

  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.2rem;
  }

  ::placeholder {
    color: #d9d9d9;
  }
`;
