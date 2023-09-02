import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setvalue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;
        addTodo(value, category);
        setvalue("");
        setCategory("");
    };

    return (
        <div className="todo-form">


            <h3>Criar tarefa:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o título"
                    value={value}
                    onChange={(e) => setvalue(e.target.value)} />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value=""> Selecione uma categoria</option>
                    <option value="Trabalho"> Trabalho</option>
                    <option value="Pessoal"> Pessoal</option>
                    <option value="Estudos"> Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm
