import { useState, createContext, useContext } from 'react'

const Context = createContext()

const TodoProvider = ({children}) => {
    const [ todos, setTodos ] = useState([1, 2]);
    return (
        <Context.Provider value={{todos, setTodos}}>
            {children}
        </Context.Provider>
    )

}

const useTodo = () => {
    const { todos, setTodos } = useContext(Context)

    return [todos, setTodos]
}

export {
    TodoProvider,
    useTodo
}
