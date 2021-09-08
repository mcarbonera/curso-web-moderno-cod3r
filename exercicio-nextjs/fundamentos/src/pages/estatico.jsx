import Layout from "../components/Layout";

export function getServerSideProps() { // conteudo gerado no servidor apenas
//export function getStaticProps() { // conteudo estatico.
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteudo Estatico">
            <div>{props.numero}</div>
        </Layout>
    )
}