import { useState, useEffect, useRef } from "react";


function Todo () {
    const [todos, setTodos] = useState([])
    const [load, setLoad] = useState(false)

    // const titleInput = useRef()

    useEffect(() => {
        if(load) {
            ;(async () => {
                const url = "https://jsonplaceholder.typicode.com/posts";
                const response = await fetch(url);
                const data = await response.json();
                setTodos([...data]);
            })()
        }
    }, [load])

    return(
        <>
        {/* <form onSubmit={ evt => {
            evt.preventDefault()
            fetch('https://jsonplaceholder.typicode.com/todos', {
                method : 'post',
                body: JSON.stringify(
                    {
                        userId: Math.random(),
                        title: titleInput.current.value,
                        completed: false
                    }
                ),
                headers: {'Content-type': 'application/json; charset=UTF-8'}
            })
            .then(response => response.json())
            .then(json => setTodos([json, ...todos]))
        }
            }>
             <input type="text" ref={titleInput} placeholder="to do"/>
             <button>Add</button>
         </form> */}

            <button onClick={() => setLoad(true)}>Load</button>
            <ul>
                {todos && todos.map((todo, index) => {
                    return <li key={index}>{todo.title}</li>
                })}
            </ul>

        </>
        )
}

export default Todo