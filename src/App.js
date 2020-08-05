import React , { useState } from 'react';
import './App.css';


export default function App() {
    const [todo , setTodo] = useState("");
    const [todos , setTodos] = useState([

    ]);
    
    const handleTodo = (e) => {
        e.preventDefault();
        setTodo(e.target.value)
    }
    const handleNewTodo = (e) => {
        e.preventDefault();
        if(todo === '' ) return;
        setTodos([...todos , {id: Date.now(), text: todo}])
        e.target.reset();

    }
    const removeItem = (id) => {
        setTodos(todos.filter(todo => {
            return todo.id !== id;
        }))

    }
    return (
        <div className="main">
            <h1>Todo list</h1>
            <form onSubmit={handleNewTodo}>
                <input type="text" placeholder="your todo..." onChange={handleTodo} />
                <ul>
                {todos.map( t => {
                    return <li key={t.id} onClick={() => {removeItem(t.id)}}>{t.text}</li>

                })}
        
                </ul>

            </form>
        </div>


    )

}

