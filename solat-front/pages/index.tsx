import type { NextPage } from 'next'
import Image from 'next/image'
import Head from "next/head";
import styles from '../styles/Home.module.css'


export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div style={{fontSize: 18}}>
                powered by Far Away Swap, Yandex, Amadeus and CEDE.labs devs, coffee and beer 🍻
            </div>
        </div>
    )
}



export const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg shadow-md py-2 bg-purple-700 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <button
                        className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="w-5"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                    <ul className="navbar-nav mr-auto lg:flex lg:flex-row ">
                        <li className="nav-item">
                            <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                               href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"><img
                                src='/img/solat-small.png' alt='Solana Hacker house'></img></a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
    <Navbar></Navbar>
    <div className={styles.container}>
      <Head>
        <title>Salat - A POA to save salad</title>
        <meta name="Start saving salad by using poap" content="Solat " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>


</header>
      
      <main className={styles.main}>
       <div class="align-top">

        </div>
        <h2 className={styles.title}>
          The events of the future
        </h2>
        <div class ="pb-8 pt-8">
        <img src='/img/hh1-small.png' alt='Solana Hacker house'></img>
        </div>
        <div className={styles.container}>
          
        <div className={styles.grid}>
          <button type="button" className="text-2xl hover:bg-gray-100 text-gray-800  py-3 px-24 rounded-lg shadow-2xl bg-gradient-to-b from-purple-450 via-purple-550 to-purple-400 hover:bg-sky-700 ...">
            Create Event
          </button>
          </div>
        </div>
      </main>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default Home
