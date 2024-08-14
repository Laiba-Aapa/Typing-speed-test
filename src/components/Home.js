import React from 'react'

const Home = ({ onGame }) => {
    return (
        <div className='home'>
            <div className='title'>
                Typing Game
            </div>
            <div className='author'>
                Coding & <br /> Design by Laiba Asif
            </div>
            <button className='btnPlay' onClick={() => onGame('playGame')}>Play Game</button>



        </div>
    )
}

export default Home
