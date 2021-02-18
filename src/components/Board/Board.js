import React, { useState } from 'react';

import Tile from '../Tile/Tile';
import "./Board.css";


function handleClick(e){
    
    console.log(e);

}

export default function Board(){

    let board = [];

    for (let j = 8 - 1 ; j >= 0; j--){
        for (let i = 0; i < 8; i++){
            board.push(<Tile key={`${j},${i}`} i={i} j={j}/>);
        }
    }
    return <div  onClick = {(e) => handleClick(e)} id="board">{board}</div>;
}