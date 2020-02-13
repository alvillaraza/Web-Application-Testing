import React, {useState} from 'react';

function Dashboard() {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    const [foul, setFoul] = useState(0);
    const [hit, setHit] = useState(0);

    const strikeButton = e => {
        setStrike(strike + 1);
    };

    const ballButton = e => {
        setBall(ball + 1);
    };

    const foulButton = e => {
        if (strike === 0) {
            setStrike(strike + 1)
        } if (strike === 1) {
            setStrike(strike + 2)
        } if (strike === 2) {
            setStrike(null)
        }
    };

    const hitButton = e => {
        setHit(hit + 1);
    };

    //balls and strikes reset  0 when a player reaches 3 strikes or 4 balls
    const threeStrikes = e => {

    }
// balls and strikes reset to 0 when a hit is recorded.


    return (
        <div>
            <div>strike={strike}</div>
            <div>ball={ball}</div>
            <button onClick={strikeButton}>Strike</button>
            <button onClick={ballButton}>Ball</button>
            <button onClick={foulButton}>Foul</button>
            <button onClick={hitButton}>Hit</button>
        </div>
    )
}

export default Dashboard;