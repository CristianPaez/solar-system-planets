"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
