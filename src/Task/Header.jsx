import { useMode } from '../Contexts/ModeContext'
import { useLang } from '../Contexts/LangContext'

function ModeHeader () {
    const [ mode, setMode ] = useMode()
    const [ lang, setLang ] = useLang()

    return (
        <>
           <header className={mode}>
            <button onClick={() => setMode('light')}>Light</button>
            <button onClick={() => setMode('dark')}>Dark</button>

            <button onClick= {() => setLang('ru')}>Ru</button>
            <button onClick= {() => setLang('en')}>En</button>
            <button onClick= {() => setLang('uz')}>Uz</button>
           </header>
        </>
    )
}

export default ModeHeader