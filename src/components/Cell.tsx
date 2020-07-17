import React from "react"

type Props = {
  cell: Cell
}

const CellMap: { [key in Cell]: string } = {
  BLACK: "o",
  WHITE: "x",
  EMPTY: "",
}

export const Cell: React.FC<Props> = ({ cell }) => (
  <div>{CellMap[cell]}</div>
)
