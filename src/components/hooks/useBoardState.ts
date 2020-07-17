import { useState, useCallback } from "react"

export const useBoardState = (cells: Array<Cell>) => {
  const [board, setBoard] = useState<Array<Cell>>(cells || [])

  const set = useCallback((id: number) => {
    const next: Cell = board
      .filter(cell => cell !== "EMPTY")
      .length % 2 === 0
        ? "BLACK"
        : "WHITE"

    setBoard(prev => {
      if (prev[id] === "EMPTY") {
        prev[id] = next
      }
      return [...prev]
    })
  }, [board, setBoard])

  return {
    board,
    set,
  }
}
