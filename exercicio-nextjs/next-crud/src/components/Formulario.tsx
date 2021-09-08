import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (valor: any) => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.getId
    const [nome, setNome] = useState(props.cliente?.getNome ?? '')
    const [idade, setIdade] = useState(props.cliente?.getIdade ?? 0)

    return (
        <div>
            { !id ? false : (
                <Entrada 
                    texto="Código" 
                    valor={id} 
                />    
            )}
            <Entrada 
                texto="Nome" 
                valor={nome}
                alterarValor={setNome}
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                alterarValor={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}