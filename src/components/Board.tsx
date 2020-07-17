import React from "react"
import { Cell } from "./Cell"

type Props = {
  cells: Array<Cell>
}

export const Board: React.FC<Props> = ({ cells }) => (
  <div>
    {cells?.map((cell, i) => (
      <Cell key={i} cell={cell} />
    ))}
  </div>
)
