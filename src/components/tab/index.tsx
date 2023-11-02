import React, { FC, useState } from "react";
import styled from "@emotion/styled";
interface IProps {
  options: string[];
  activeTab: string;
  setTab: (item: string) => void;
}
export const Tab: FC<IProps> = ({
  options,
  activeTab = options[0],
  setTab
}) => {
  return (
    <Container>
      {options.map((item, i) => {
        return (
          <Item key={i} length={options.length} onClick={() => setTab(item)}>
            <Text active={(item === activeTab).toString()}>{item}</Text>
            <Bar active={(item === activeTab).toString()} />
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  color: black;
  display: flex;
`;

interface ItemProps {
  length: number;
}
const Item = styled.div<ItemProps>`
  cursor: pointer;
  width: ${(props) => `calc(100%/${props.length})`};
`;
interface activeProps {
  active: string;
}
const Text = styled.h3<activeProps>`
  text-align: center;
  color: ${(props) => (props.active === "true" ? "#002a50" : "#D9D9D9")};
  font-size: 1.8rem;
  font-weight: 600;
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    font-size: 1.6rem;
  }
`;
const Bar = styled.div<activeProps>`
  margin-top: 0.8rem;
  width: 100%;
  height: 0.1rem;
  border-radius: 5px;
  background-color: ${(props) =>
    props.active === "true" ? "#002a50" : "#D9D9D9"};
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    margin-top: 0.6rem;
  }
`;
