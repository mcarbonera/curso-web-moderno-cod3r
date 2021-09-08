import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="1) Next.js"></Cabecalho>
            <Cabecalho titulo="2) React"/>
        </Layout>
    )
}