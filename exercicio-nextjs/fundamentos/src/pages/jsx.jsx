import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <p>{"muito legal".toUpperCase()}</p>
    }

    return (
        <Layout titulo="Entendendo JSX">
            <div>
                {titulo}
                <p>{Math.random()}</p>
                {subtitulo()}
                <p>
                    {JSON.stringify({nome: 'teste', valor: 1})}
                </p>
            </div>
        </Layout>
    )
}