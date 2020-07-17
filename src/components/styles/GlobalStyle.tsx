import React from "react"
import { Global, css } from "@emotion/core"

const globalStyles = css`
  html,body,#root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }
`

export const GlobalStyle = () => (
  <Global styles={globalStyles} />
)
