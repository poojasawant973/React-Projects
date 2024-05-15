import React, { useRef, useState } from "react";
import './TicTacToe.css';
import circle_icon from './Assets/circle.png';
import cross_icon from './Assets/cross.png';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
    const titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock || data[num] !== "") {
            return;
        } 
        const newData = [...data];
        newData[num] = count % 2 === 0 ? "X" : "O";
        setData(newData);
        setCount(prevCount => prevCount + 1);
        checkWin(newData);
    }

    const checkWin = (dataToCheck) => {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (dataToCheck[a] && dataToCheck[a] === dataToCheck[b] && dataToCheck[a] === dataToCheck[c]) {
                won(dataToCheck[a]);
                return;
            }
        }

        if (count === 8) {
            titleRef.current.innerHTML = "It's a draw!";
        }
    }

    const won = (winner) => {
        setLock(true);
        titleRef.current.innerHTML = `Congratulation 🎉: ${winner === "X" ? `<img src="${cross_icon}" alt="Cross">` : `<img src="${circle_icon}" alt="Circle">`} Wins!`;
    }

    const reset = () => {
        setLock(false);
        setCount(0);
        setData(["", "", "", "", "", "", "", "", ""]);
        titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>";
    }

    return (
        <div className="container">
            <h1 className="title" ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}>
                        {data[0] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[0] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}>
                        {data[1] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[1] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}>
                        {data[2] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[2] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}>
                        {data[3] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[3] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}>
                        {data[4] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[4] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}>
                        {data[5] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[5] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}>
                        {data[6] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[6] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}>
                        {data[7] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[7] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}>
                        {data[8] === "X" && <img src={cross_icon} alt="Cross" />}
                        {data[8] === "O" && <img src={circle_icon} alt="Circle" />}
                    </div>
                </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default TicTacToe;
