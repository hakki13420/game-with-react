import React,{useState} from 'react'
import './App.css';
import Cells from './components/Cells';
import Options from './components/Options';
import PiecesContext from './context/piecesContext'

const initState={
  pieces1:[],
  pieces2:[]
}
function App() {
  const [pieces, setPieces]=useState(initState)
  {
    console.log('pies app', pieces)
  }
  return (
    <div className="App">
      <PiecesContext.Provider value={{pieces, setPieces}}>
        <Cells />
        <Options />
      </PiecesContext.Provider>
    </div>
  );
}

export default App;
