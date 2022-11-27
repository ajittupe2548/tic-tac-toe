import React from 'react';

import styles from './app.module.scss';
import TicTacToe from '../components/TicTacToe';

const app = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Tic Tac Toe</h1>
            <TicTacToe />
        </div>
    )
}

export default app;
