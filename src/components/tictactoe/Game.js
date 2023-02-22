import React, { useState } from 'react';
import Board from './Board';
import './GameStyles.css';
import { caculateWWinner } from './../../helpers';

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = caculateWWinner(board);
    const handleClick = (index) => {
        const newBoard = [...board];
        if(winner || newBoard[index]) return;
        newBoard[index] = xIsNext ? 'X' : 'O';

        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
    }
    return (
        <div>
            <Board cells={board} onClick={handleClick} />
            {winner && <div className="game-winner">Winner: {winner}</div>}
            <button className='game-reset' onClick={handleResetGame}>Reset Game</button>
        </div>
    );
}
