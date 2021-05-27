import { useMode } from '../Contexts/ModeContext'
import { useLang } from '../Contexts/LangContext'




function Main () {
    const langs = {
        uz : {text: `O'zbekcha`},
        ru : {text: `Русский`},
        en : {text: `English`},
    }
    const [ mode ] = useMode()
    const [ lang ] = useLang()

    return (
        <>
            <p className={mode}>{langs[lang].text}</p>
        </>
    )
}

export default Main

// 7 ta komponent
