import React, { useState, useEffect } from "react";
import styles from './TicTacToe.module.scss';

function TicTacToe() {
    const [squares, setSquares] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
    const [isNextCross, setIsNextCross] = useState(true);
    const [winner, setWinner] = useState('');
    const [hasDrawn, setHasDrawn] = useState(false);

    useEffect(() => {
        const result = checkResult();
        result && setWinner(result);
        setHasDrawn(Object.values(squares).every(item => item != ''));
    }, [squares]);

    const winnerConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    const handleSquareClick = (e) => {
        const { index } = e.target.dataset;
        if (!squares[index]) {
            setSquares({ ...squares, [index]: isNextCross ? 'X' : 'O' });
            setIsNextCross(!isNextCross);
        }
    }

    const renderSquares = () => (
        Object.keys(squares).map(item => (
            <div key={item} data-index={item} onClick={(e) => !winner && !hasDrawn && handleSquareClick(e)} className={styles.square}>{squares[item]}</div>
        ))
    )

    const handleReset = () => {
        setSquares({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '' });
        setIsNextCross(true);
        setWinner('');
    }

    const checkResult = () => {
        for (let i = 0; i < winnerConditions.length; i++) {
            const [x, y, z] = winnerConditions[i];
            if (squares[x] != '' && squares[x] == squares[y] && squares[x] == squares[z]) {
                return squares[x];
            }
        }
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.squareContainer}>
                {renderSquares()}
            </div>
            <div className={styles.details}>
                <p className={styles.description}>{winner ? `Winner : ${winner}` : hasDrawn ? `Draw : X O` : `Next Player : ${isNextCross ? 'X' : 'O'}`}</p>
                <button className={styles.resetBtn} onClick={handleReset}>Restart Game</button>
            </div>
        </div>
    );
}

export default TicTacToe;
