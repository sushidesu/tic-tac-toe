import React from "react"
import styled from "@emotion/styled"
import { useBoardState } from "./hooks/useBoardState"
import { Cell } from "./Cell"

type Props = {
  board: ReturnType<typeof useBoardState>["board"]
  set: ReturnType<typeof useBoardState>["set"]
}
type CellItem = {
  id: number
  cell: Cell
}

const CELLS_PER_ROW = 3

export const Board: React.FC<Props> = ({ board, set }) => {
  const rowIndex = (index: number) => Math.floor(index / CELLS_PER_ROW)
  const rows: Array<Array<CellItem>> = []

  board.forEach((cell, index) => {
    const row = rowIndex(index)
    const item: CellItem = {
      id: index,
      cell: cell,
    }
    if (rows[row]) {
      rows[row].push(item)
    } else {
      rows.push([item])
    }
  })

  return (
    <Wrapper>
      {rows.map((row, i) => (
        <Row key={i}>
          {row.map(({ cell, id }) => (
            <Cell
              key={id}
              cell={cell}
              onClick={() => set(id)} />
          ))}
        </Row>
      ))}
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
