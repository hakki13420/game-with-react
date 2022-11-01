import React,{useEffect, useContext} from 'react'

import piecesContext from '../context/piecesContext'
import '../styles/cell.css'
import Piece from './Piece'


export default function Cell({cells}) {
    const {pieces, setPieces}=useContext(piecesContext)
    useEffect(()=>{

    },[pieces])
  return (
    <>
     {
         cells.map((el,index)=>{

             return <div    id={"cell-"+el.id} 
                            className={(el.color===1)?'cell odd-cell':'cell even-cell'}
                            key={el.id}
                    >    
                      {pieces.pieces1.filter(piece=>piece.id===el.id).length>0? <Piece player={1} id={el.id}/>:""}                      
                      {pieces.pieces2.filter(piece=>piece.id===el.id).length>0?<Piece player={2} id={el.id}/>:""}                      
                    </div>
         })
     }   
    </>
  )
}
