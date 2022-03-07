import {React, useState, useEffect} from 'react'
import './App.css';
import WinResult from './WinResult';

function App() {

  const [input, setInput] = useState() 
  const [player1Input, setPlayer1Input] = useState(0)
  const [player2Input, setPlayer2Input] = useState(0)
  const [player1Trigger, setPlayer1Trigger] = useState(true)
  const [player2Trigger, setPlayer2Trigger] = useState(true)
  const [player1WinValue, setPlayer1WinValue] = useState(false)
  const [player2WinValue, setPlayer2WinValue] = useState(false)
  const winResult = !player1Trigger && !player2Trigger

  useEffect(() => {
    if (player1Input === 20 || player2Input === 20) {
      setPlayer1Trigger(false)
      setPlayer2Trigger(false)
      if (player1Input === 20) {
        setPlayer1WinValue(true)
      }else if (player2Input === 20) {
        setPlayer2WinValue(true)
      }
    }
  },[player1Input, player2Input])
  const resetInput = () =>{
    setInput(0)
    setPlayer1Input(0)
    setPlayer2Input(0)
  }

  const handlePlayer1Input = () =>{
    
    setPlayer1Input(Math.floor(Math.random() * input ))
    setPlayer1Trigger(false)
    setPlayer2Trigger(true)
    
  }
  const handlePlayer2Input = () =>{
    setPlayer2Input(Math.floor(Math.random() * input))
    setPlayer1Trigger(true)
    setPlayer2Trigger(false)
  }

  const disableUser1 = !player1Trigger && "disabled"
  const disableUser2 = !player2Trigger && "disabled"

  return (
    <div className="App">
      <div className="container">
        <h2>Player Vs Player</h2>
        <div className="row">
          <div className="col-lg-12">
          <p>Winning score: {input}</p>
          <input value={input} onInput={e => setInput(e.target.value)} name={'inputvalue'} type="number" className="form-control" placeholder="type any number"/>
          
       
            {(player1WinValue || player2WinValue) && winResult && (
              <WinResult player1WinValue={player1WinValue}
              player2WinValue={player2WinValue}/>
            )}
        

          <p>Player One</p>
          <button onClick={handlePlayer1Input} className={`btn btn-info ${disableUser1}`}>Click me: {player1Input}</button>
          <p>Player Two</p>
          <button onClick={handlePlayer2Input} className={`btn btn-info ${disableUser2}`}>Click me: {player2Input}</button>
          <p>Reset Everything</p>
          <button onClick={resetInput}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
