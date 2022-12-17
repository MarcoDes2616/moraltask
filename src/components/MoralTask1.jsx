import React, { useState } from 'react';

//const [change, setChange] = useState(false);



const MoralTask1 = () => {

    const [change, setChange] = useState(false)

    const changeState = () => {
        console.log("hola");
        setChange(!change)
    }

    return (
        <div>
            <div className={change === true ? "on" : "off"}></div>
            
            <img className='man' src="src/assets/img/man.png" alt="" />
            <div className='switch'>
                <button onClick={changeState}>{change === false ? "ON" : "OFF"}</button>
            </div>
            <p>{change === false ? "Hola Marco, veamos tu tarea moral" : "Woow, Andres te va a poner 10. No lo dudes!"}</p>
        </div>
    );
};

export default MoralTask1;