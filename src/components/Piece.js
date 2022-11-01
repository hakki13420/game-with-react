import React,{useState, useContext, useEffect} from 'react'
import piecesContext from '../context/piecesContext'
import '../styles/piece.css'

export default function Piece({player, id}) {
  const {pieces, setPieces}=useContext(piecesContext)
  const [selected, setSelected]=useState(false);
  
  useEffect(()=>{
    if(player===1){
      setSelected(pieces.pieces1.filter(el=>el.id===id)[0].selected)  
      }
      if(player===2){
        setSelected(pieces.pieces2.filter(el=>el.id===id)[0].selected)  
    }    
  
    console.log("selected", selected)
  },[pieces])

  const handlClick=()=>{
    if(player===1){
      const selectedPiece=pieces.pieces1.map(el=>el.id===id?{...el,selected:!el.selected}:{id:el.id,playe:1,selected:false})
      //                    .map(piece=>({...piece,selected:!piece.selected}))
      console.log("selectedPiece", selectedPiece)
      setPieces({pieces1:[...selectedPiece],
                pieces2:[...pieces.pieces2]
      })
      setSelected(!selected)
    }
    if(player===2){
      const selectedPiece=pieces.pieces2.map(el=>el.id===id?{...el,selected:!el.selected}:{id:el.id,playe:2,selected:false})
      //                    .map(piece=>({...piece,selected:!piece.selected}))
      console.log("selectedPiece", selectedPiece)
      setPieces({ pieces1:[...pieces.pieces1],
                  pieces2:[...selectedPiece]
                
      })
      setSelected(!selected)
    }
    
  }
  return (    
    <div  className={(player===1?"piece1":"piece2")+ " piece"}          
          onClick={handlClick}
          style={selected?{border:"2px solid white"}:null}
    >
   
    </div>
  )
}
