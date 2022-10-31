import React,{useContext} from 'react'
import { useEffect } from 'react/cjs/react.production.min'
import piecesContext from '../context/piecesContext'
import '../styles/cell.css'
import Piece from './Piece'


export default function Cell({cells}) {
    const {pieces, setPieces}=useContext(piecesContext)
    React.useEffect(()=>{

    },[pieces])
  return (
    <>
     {
         cells.map((el,index)=>{

             return <div    id={"cell-"+el.id} 
                            className={(el.color===1)?'cell odd-cell':'cell even-cell'}
                            key={el.id}
                    >    
                      {pieces.pieces1.filter(piece=>piece.id===el.id).length>0? <Piece player={1}/>:""}                      
                      {pieces.pieces2.filter(piece=>piece.id===el.id).length>0?<Piece player={2}/>:""}                      
                    </div>
         })
     }   
    </>
  )
}
