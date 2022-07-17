import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
  
    <div className={styles.container}>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Solat " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          The events of the future
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <div className={styles.container}>
          
        <div className={styles.grid}>
          <button type="button" className="text-white text-2xl hover:bg-gray-100 text-gray-800  py-3 px-20 rounded-lg shadow-2xl bg-gradient-to-r from-purple-450 via-purple-450 to-blue-450 hover:bg-sky-700 ...">
            Create Event
          </button>
          </div>
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
    </div>
  )
}

export default Home
