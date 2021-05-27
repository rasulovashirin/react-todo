import { useTodo } from '../../Context'

function Main () {
    const [ todos ] = useTodo()

    return (
        <>
        <ul>
            {
                todos.map((todo, index) => <li key ={index}>{todo}</li>)
            }
        </ul>
        </>
        )
    }

    export default Main