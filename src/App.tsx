import React from 'react'
import { Board } from "./components/Board"

const INIT: Array<Cell> = [
  "EMPTY", "BLACK", "EMPTY",
  "EMPTY", "EMPTY", "EMPTY",
  "EMPTY", "EMPTY", "EMPTY",
]

export default () => (
  <div>
    <h1>tic tac toe</h1>
    <Board cells={INIT} />
  </div>
)
