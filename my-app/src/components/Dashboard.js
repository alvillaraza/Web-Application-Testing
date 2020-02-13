import React from 'react';

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
        setFoul(foul + 1);
    };

    const hitButton = e => {
        setHit(hit + 1);
    };


    return (
        <div>
            <button onClick={strikeButton}>Strike</button>
            <button onClick={ballButton}>Ball</button>
            <button onClick={foulButton}>Foul</button>
            <button onClick={hitButton}>Hit</button>
        </div>
    )
}

export default Dashboard;