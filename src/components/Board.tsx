import React from "react"
import styled from "@emotion/styled"
import { Cell } from "./Cell"

type Props = {
  cells: Array<Cell>
}

const CELLS_PER_ROW = 3

export const Board: React.FC<Props> = ({ cells }) => {
  const row = (n: number) => cells?.filter((_, i) => Math.floor(i / CELLS_PER_ROW) === n - 1)

  return (
    <Wrapper>
      <Row>
        {row(1).map((cell, i) => (
          <Cell key={i} cell={cell}/>
        ))}
      </Row>
      <Row>
        {row(2).map((cell, i) => (
          <Cell key={i} cell={cell}/>
        ))}
      </Row>
      <Row>
        {row(3).map((cell, i) => (
          <Cell key={i} cell={cell}/>
        ))}
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;

  & > div + div {
    margin-top: .2em;
  }
`

const Row = styled.div`
  width: fit-content;
  margin: 0;
  display: flex;

  & > div + div {
    margin-left: .2em;
  }
`
