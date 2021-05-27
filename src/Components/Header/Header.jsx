import { useTodo } from '../../Context'

function Header () {
    const [ todos, setTodos ] = useTodo()

    return (
        <>
        <input onKeyUp= {(evt) => {
            if(evt.keyCode === 13) {
                setTodos([...todos, evt.target.value])
            }
        }}>
        </input>
        </>
        )
    }

    export default Header