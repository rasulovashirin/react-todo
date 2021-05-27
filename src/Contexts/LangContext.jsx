import { createContext, useReducer, useContext } from 'react'

const Context = createContext()

const LangProvider = ({children}) => {
    const langs = ['en', 'ru', 'uz']

    const reducer = (state, name) => {
        if(langs.includes(name)) {
            window.localStorage.setItem('__lang', name)
            return name
        }
        return state
    }

    const initial = () => window.localStorage.getItem('__lang') || 'uz'

    const [lang, setLang] = useReducer(reducer, null, initial)

    return (
        <Context.Provider value={{lang, setLang}}>
            {children}
        </Context.Provider>
    )
}

const useLang = () => {
    const { lang, setLang } = useContext(Context)

    return [lang, setLang]
}

export {
    LangProvider,
    useLang
}