import React from 'react'
import '../styles/piece.css'

export default function Piece({player}) {
  return (
    <div className="piece" style={player===1?{background:'blue'}:{background:'green'}}>
        
    </div>
  )
}
