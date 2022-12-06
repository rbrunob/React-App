import React, { useState } from 'react'
import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from "./List.module.scss";

interface Props {
    tarefa: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;  
}

function List({ tarefa, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefa.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;

