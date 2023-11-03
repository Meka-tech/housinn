import React from "react";
import Lottie from "lottie-react";
import Loading from "@/lotties/loading.json";
import LoadingVariant from "@/lotties/loading-variant.json";
import styled from "@emotion/styled";

export const LoadingLottie = () => (
  <Container>
    <Lottie animationData={Loading} loop={true} />
  </Container>
);

export const LoadingVariantLottie = () => (
  <Container>
    <Lottie animationData={LoadingVariant} loop={true} />
  </Container>
);

const Container = styled.div`
  width: 2rem;
  height: 2rem;
`;
