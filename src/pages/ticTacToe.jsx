import { faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)

  const handleCellClick = (index) => {
    if (cells[index] === null) {
      const newCells = [...cells]
      newCells[index] = isXTurn ? 'X' : 'O'
      setCells(newCells)
      setIsXTurn(!isXTurn)
      setTimeout(() => {
        checkWinner(newCells)
      }, 1)
    }
  }

  const checkWinner = (newCells) => {
    const winingChances = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    let RoundOne = false
    for (let i = 0; i < winingChances?.length; i++) {
      let winningValue = winingChances[i]
      let a = newCells[winningValue[0]]
      let b = newCells[winningValue[1]]
      let c = newCells[winningValue[2]]

      if (a === null && b === null && c === null) {
        break
      }
      if (a === b && b === c && c === a) {
        RoundOne = true
        alert(`${a} Player win the match`)
      }
      if (RoundOne) {
        setCells(Array(9).fill(null))
        setIsXTurn(true)
      }
      const isNotNullArray = (arr) => arr.every((value) => value !== null)
      if (isNotNullArray(newCells)) {
        alert('Match Draw')
        setCells(Array(9).fill(null))
        setIsXTurn(true)
        break
      }
    }
  }
  const renderIcon = (cellValue) => {
    if (cellValue === 'X') {
      return <FontAwesomeIcon icon={faTimes} />
    } else if (cellValue === 'O') {
      return <FontAwesomeIcon icon={faCircle} />
    }

    // return null
  }

  return (
    <div className='tictactoe'>
      <div className='board'>
        <div className='row'>
          {cells.slice(0, 3).map((cell, index) => (
            <div
              key={index}
              className='cell'
              onClick={() => handleCellClick(index)}
            >
              {renderIcon(cell)}
            </div>
          ))}
        </div>
        <div className='row'>
          {cells.slice(3, 6).map((cell, index) => (
            <div
              key={index + 3}
              className='cell'
              onClick={() => handleCellClick(index + 3)}
            >
              {renderIcon(cell)}
            </div>
          ))}
        </div>
        <div className='row'>
          {cells.slice(6, 9).map((cell, index) => (
            <div
              key={index + 6}
              className='cell'
              onClick={() => handleCellClick(index + 6)}
            >
              {renderIcon(cell)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TicTacToe
