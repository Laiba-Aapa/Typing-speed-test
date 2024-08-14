import React, { useEffect, useState } from 'react'

const PlayGame = ({ onChangeScore }) => {
    const [defaultData] = useState('Considered discovered sentiments projecting entreaties melancholy expression solicitude principles Hard sigh with west same lady saved linen downs tears son add music Expression alteration entreaties terminated estimating add narrow having wished things denied admire wound worth water linen vexed')

    const [dataTyping, setDataTyping] = useState([]);
    const [textTyping, setTextTyping] = useState({
        value: '',
        position: 0,
    });


    useEffect(() => {
        const addWord = (quantity = 20) => {
            const arrayDefaultDB = defaultData.split(' ');
            const dataTypingTest = [];
            for (let index = 0; index < quantity; index++) {
                const position = Math.floor(Math.random() * arrayDefaultDB.length)
                dataTypingTest.push({
                    value: arrayDefaultDB[position],
                    status: null,
                })
            }
            setDataTyping(dataTypingTest)
        }
        if (dataTyping.length === 0 || textTyping.position >= dataTyping.length) {
            addWord();
            setTextTyping({
                ...textTyping, position: 0
            })
        }
    }, [textTyping.position])

    const handleChangeTyping = (e) => {
        const valueInput = e.target.value;
        if (!valueInput.includes(' ')) {
            setTextTyping({
                ...textTyping,
                value: valueInput,
            })
        }
        else if (textTyping.value !== '') {
            checkResult();
        }
    }
    const checkResult = () => {
        const dataCheck = dataTyping;
        const wordCheck = dataCheck[textTyping.position].value;
        if (textTyping.value === wordCheck) {
            dataCheck[textTyping.position].status = true;
            onChangeScore('right');
        }
        else {
            dataCheck[textTyping.position].status = false;
            onChangeScore('wrong');
        }
        setDataTyping(dataCheck);
        setTextTyping({
            value: '',
            position: textTyping.position + 1,
        })
    }
    console.log(dataTyping)
    return (
        <div className='playing'>
            <ul className='list'>{
                dataTyping.map((word, index) => (
                    <li key={index} className={word.status === true ? 'true' : word.status === false ? 'false' : ''}>{word.value}</li>
                ))
            }</ul>

            <div className='inputForm'>
                <input type='text' value={textTyping.value} onChange={handleChangeTyping} />
            </div>
        </div>
    )
}

export default PlayGame;
