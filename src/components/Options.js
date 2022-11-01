import React,{useContext} from 'react'
import PiecesContext from '../context/piecesContext'
import {usePieces} from '../hooks/usePieces'
import '../styles/options.css'

export default function Options() {
  const {pieces,setPieces}=useContext(PiecesContext)
  const state=usePieces()

  const InitializeGame=()=>{
    setPieces({pieces1:[...state.pieces1],pieces2:[...state.pieces2]})
  }
  
  return (
    <div className="options">
        <div className="player1"></div>
        <hr />
        <div className="player2"></div>
        <hr />
        <button onClick={InitializeGame}>New game</button>
    </div>
  )
}
