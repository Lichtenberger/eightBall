import React, { useState } from 'react'
import Answers from './answers.json'
import './EightBall.css'
import { choice } from './random'

function EightBall({ answers = Answers }) {
    const [ answer, setAnswer] = useState({
        msg: 'Think of a question',
        color: 'black',
    })

function click(e) {
    setAnswer(choice(answers))
}

return (
    <div className='EightBall' onClick={click} style={{backgroundColor: answer.color}}>
        <p>{answer.msg}</p>

    </div>
)
}
export default EightBall