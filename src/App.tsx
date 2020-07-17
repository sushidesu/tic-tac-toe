import React from 'react'
import { GlobalStyle } from "./components/styles/GlobalStyle"
import { Board } from "./components/Board"

const INIT: Array<Cell> = [
  "EMPTY", "BLACK", "EMPTY",
  "EMPTY", "EMPTY", "EMPTY",
  "EMPTY", "EMPTY", "EMPTY",
]

export default () => (
  <div>
    <GlobalStyle />
    <h1>tic tac toe</h1>
    <Board cells={INIT} />
  </div>
)
