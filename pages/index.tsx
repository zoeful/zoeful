import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zoe's Daily Calendar</title>
        <meta name="description" content="Zoe's Portfolio" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is Zoe's Daily Calendar
        </h1>

        <p className={styles.description}>
          You can check the daily life of zoe after leaving the company
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/zoeful"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Zoeful GitHub
        </a>
      </footer>
    </div>
  )
}

export default Home
