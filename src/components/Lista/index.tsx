import React from 'react';
import Item from './Item';
import style from "./List.module.scss";


function List() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },

        {
            tarefa: 'JavaScript',
            tempo: '01:00:00'
        },

        {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }
    ];
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                   <Item 
                    key={index}
                    tarefa={item.tarefa}
                    tempo={item.tempo}
                   />
                ))}
            </ul>
        </aside>
    )
}

export default List;

