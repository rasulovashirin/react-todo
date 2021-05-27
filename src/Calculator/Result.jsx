import { useCalc } from '../Contexts/CalcContext'

function Result () {
    const [result, setResult] = useCalc()

    return(
        <>
            <p>{result}</p>
        </>
    )
}

export default Result