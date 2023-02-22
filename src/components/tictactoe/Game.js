import React, { useReducer } from 'react';
import Board from './Board';
import './GameStyles.css';
import { caculateWinner } from './../../helpers';

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
};

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'handleClick':
            const newBoard = [...state.board];
            if (action.payload.winner || newBoard[action.payload.index]) return state;
            newBoard[action.payload.index] = state.xIsNext ? 'X' : 'O';
            return {
                ...state,
                board: newBoard,
                xIsNext: !state.xIsNext,
            };

        case 'handleResetGame':
            return {
                ...state,
                board: Array(9).fill(null),
                xIsNext: true,
            };
        default:
            return state;
    }
};

export default function Game() {
    const [state, dispatch] = useReducer(gameReducer, initialState);

    const winner = caculateWinner(state.board);

    const handleClick = (index) => {
        dispatch({ type: 'handleClick', payload: { index, winner } });
    };

    const handleResetGame = () => {
        dispatch({ type: 'handleResetGame' });
    };

    return (
        <div>
            <Board cells={state.board} onClick={handleClick} />
            {winner && <div className="game-winner">Winner: {winner}</div>}
            <button className="game-reset" onClick={handleResetGame}>
                Reset Game
            </button>
        </div>
    );
}
