import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState( {})

    function obterCliente() {
        fetch(`http://localhost:3000/api/testeApi/${codigo}`)
            .then(resp => resp.json())
            .then(dados => setCliente(dados))
    }
    
    return (
        <Layout>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <div>
                <li>Codigo: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </div>
        </Layout>
    )
}