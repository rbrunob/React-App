import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundo } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useState, useEffect } from "react"

interface Props {
    selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundo(selecionado.tempo));
    }
  }, [selecionado])

function regressiva(contador: number = 0) {
    setTimeout(() => {
        if (contador > 0) {
            setTempo(contador - 1);
            return regressiva(contador - 1);
        }
    }, 1000);
}

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio
                    tempo={tempo}
                />
            </div>
            <Button
                texto="Começar"
                onClick={() => regressiva(tempo)}
            />
        </div>
    )
}