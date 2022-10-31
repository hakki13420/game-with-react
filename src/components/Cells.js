import React from 'react'
import '../styles/cells.css'
import Cell from './Cell'
import cells from '../services/cells'

export default function Cells({cell}) {
  return (
    <div className="cells">
        {
            cells.length && cells.map((cell,i)=>{
            return <Cell key={i} cells={cell} />
            })
        }   
    </div>
  )
}
