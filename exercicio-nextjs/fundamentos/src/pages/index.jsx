import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
  //return "Inicio"
  return (
    <div>
      <h1>Título</h1>
      <h2>Fundamentos de Next.js e React</h2>
      <h3>Vamos estudar esse framework</h3>

      <Link href="/estiloso">
        Estiloso
      </Link>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh'
      }}>
        <Navegador texto="Estiloso" destino="/estiloso" />
        <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
        <Navegador texto="JSX" destino="/jsx" cor="crimson" />
        <Navegador texto="Navegacao #01" destino="/navegacao" cor="green" />
        <Navegador texto="Navegacao #02" destino="/cliente/123" cor="blue" />
        <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
        <Navegador texto="Integracao com API #01" destino="/integracao1" cor="#545FE3" />
        <Navegador texto="Conteudo estatico" destino="/estatico" cor="#fa0522" />
      </div>
    </div>
  )
}

/*
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
*/