import cells from '../services/cells'

export const usePieces=()=>{
    let pieces1=[]
    let pieces2=[]

    cells.forEach(cell=>{
      cell.forEach(item=>{
        if (item.color===2 && item.id<=15){          
          pieces1.push({id:item.id,player:1,selected:false})                                
        }
        if (item.color===2 && item.id<=63 && item.id>=48){                      
            pieces2.push({id:item.id,player:2,selected:false})          
        }
      })
    })
    return{
        pieces1,
        pieces2
    }
  }
