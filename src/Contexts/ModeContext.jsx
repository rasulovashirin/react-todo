import { createContext, useContext, useReducer } from 'react'

const Context = createContext()

const ModeProvider = ({children}) => {
    const modes = ['light', 'dark']

    const reducer = (state, name) => {
        if(modes.includes(name)) {
            window.localStorage.setItem('__mode', name)
            return name
        }
        return state
    }

    const initial = () => window.localStorage.getItem('__mode')

    const [ mode, setMode ] = useReducer(reducer, null, initial);
    return (
        <Context.Provider value={{mode, setMode}}>
            {children}
        </Context.Provider>
    )
}

const useMode = () => {
    const { mode, setMode } = useContext(Context)

    return [mode, setMode]
}

export {
    ModeProvider,
    useMode
}