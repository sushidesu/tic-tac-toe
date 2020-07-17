import React from 'react'
import { GlobalStyle } from "./components/styles/GlobalStyle"
import { Board } from "./components/Board"
import { useBoardState } from "./components/hooks/useBoardState"

const WIDTH = 3
const HEIGHT = WIDTH
const INIT: Array<Cell> = Array.from({ length: WIDTH * HEIGHT }).map(_ => "EMPTY")

export default () => {
  const {board, set} = useBoardState(INIT)

  return (
    <div>
      <GlobalStyle />
      <h1>tic tac toe</h1>
      <Board board={board} set={set}/>
    </div>
  )
}
