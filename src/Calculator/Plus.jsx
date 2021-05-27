import { useRef, useState } from 'react'
import { useCalc } from '../Contexts/CalcContext'

function  Plus () {
    const [result, setResult] = useCalc()
    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const inputRef = useRef(0)

    return(
        <>
        <input ref={inputRef} type="number" onChange = {e => setResult(e.target.value)}/>
        <button onClick= {() => {
            setFirst(inputRef.current.value)
            inputRef.current.value = null

        }}>+</button>

        <button onClick= {() => {
            setSecond(inputRef.current.value)
            return setResult(Number(second) + Number(first))
        }}>=</button>

        </>
        )
}

export default Plus

//8 + 10
// 8 first
// 10 second