import { useState, useCallback, useMemo } from "react"

export const useBoardState = (cells: Array<Cell>) => {
  const [board, setBoard] = useState<Array<Cell>>(cells || [])

  const next: Cell = useMemo(() => board
    .filter(cell => cell !== "EMPTY")
    .length % 2 === 0
      ? "BLACK"
      : "WHITE"
  , [board])

  const set = useCallback((id: number) => {
    setBoard(prev => {
      if (prev[id] === "EMPTY") {
        prev[id] = next
      }
      return [...prev]
    })
  }, [next, setBoard])

  const winner = useMemo<Cell | null>(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    const end = lines.some(line => {
      const [a, b, c] = line
      return board[a] !== "EMPTY"
        && board[a] === board[b]
        && board[a] === board[c]
    })

    return end
      ? next === "BLACK"
        ? "WHITE"
        : "BLACK"
      : null
  }, [next, board])

  return {
    board,
    set,
    winner,
  }
}
