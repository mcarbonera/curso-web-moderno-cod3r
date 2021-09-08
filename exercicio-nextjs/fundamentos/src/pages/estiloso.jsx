import Layout from '../components/Layout'

import styles from '../styles/Estiloso.module.css'
export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando modulos css</h1>
            </div>
        </Layout>
    )
}