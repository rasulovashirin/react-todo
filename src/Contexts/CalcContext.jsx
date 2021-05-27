import { createContext, useState, useContext } from 'react'

const Context = createContext()

const CalcProvider = ({children}) => {

    const [result, setResult] = useState(1)

    return(
        <Context.Provider value={{result, setResult}}>
            {children}
        </Context.Provider>
    )
}

const useCalc = () => {
    const { result, setResult } = useContext(Context)

    return [result, setResult]
}


export {
    CalcProvider,
    useCalc
}