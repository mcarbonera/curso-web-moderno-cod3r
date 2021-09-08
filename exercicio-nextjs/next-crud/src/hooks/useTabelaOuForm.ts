import { useState } from "react"

export default function useTabelaOuForm() {
    const [tabelaVisivel, setTabelaVisivel] = useState(true)

    const exibirTabela = () => setTabelaVisivel(true)
    const exibirFormulario = () => setTabelaVisivel(false)

    return {
        formularioVisivel: tabelaVisivel === false,
        tabelaVisivel: tabelaVisivel === true,
        exibirTabela,
        exibirFormulario
    }
}