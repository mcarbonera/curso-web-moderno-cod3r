import Layout from "../../components/Layout";
import { useRouter } from 'next/router'

export default function ClienteProCodigo() {
    const router = useRouter()
    return (
        <Layout titulo="Navegacao Dinamica">
            <span>Codigo = {router.query.codigo}</span>
        </Layout>
    )
}