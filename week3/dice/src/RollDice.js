import {useState} from 'react'
import Die from './Die';

function RollDice() {

    const [die1, setDie1] = useState()
    const [die2, setDie2] = useState()

    const rollDice = () => {

        //let randNum1 = Math.floor(Math.random() * 6 + 1)
        //let randNum2 = Math.floor(Math.random() * 6 + 1)

        setDie1(Math.floor(Math.random() * 6 + 1))
        setDie2(Math.floor(Math.random() * 6 + 1))

    }

    return (
        <div>
            <Die output={die1} />
            <Die output={die2} />
 
            <button onClick={rollDice}>Roll Dice</button>
        </div>
    )
}

export default RollDice