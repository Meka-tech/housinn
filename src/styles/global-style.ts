import { css } from "@emotion/react";

export const global = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
    font-size: 10px;
    overflow-x: hidden;
    color: black;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    /* html {
      color-scheme: dark;
    } */
    /* body {
      color: white;
      background: black;
    } */
  }
  @media screen and (min-width: 1300px) and (max-width: 1600px) {
    body {
      font-size: 8px;
    }
  }
`;
