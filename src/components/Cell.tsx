import React from "react"
import styled from "@emotion/styled"

type Props = {
  cell: Cell
  onClick: () => void
}

const CellMap: { [key in Cell]: string } = {
  BLACK: "o",
  WHITE: "x",
  EMPTY: "",
}

export const Cell: React.FC<Props> = ({ cell, onClick }) => (
  <Wrapper onClick={onClick}>{CellMap[cell]}</Wrapper>
)

const Wrapper = styled.div`
  font-size: 1.4em;
  width: 1.2em;
  height: 1.2em;
  line-height: 1.2;
  text-align: center;
  background-color: #eee;
`
