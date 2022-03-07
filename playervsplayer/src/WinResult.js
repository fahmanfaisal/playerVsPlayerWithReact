import React from 'react'

export default function ({player1WinValue, player2WinValue}) {

    let playerName
    if (player1WinValue) {
        playerName = "Player One Win"
    }else if(player2WinValue){
        playerName = "Player Two Win"
    }

  return (
    <div>
        <h1 className="text-center py-5 bg-light text-dark">{playerName}</h1>
    </div>
  )
}
