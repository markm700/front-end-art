import type { NextPage } from 'next'
import Head from 'next/head'
import Wrestler from '../comps/wrestler'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wrestling Hub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrestler name={"Santos Escobar"} company={"WWE NXT"} division={"North American Title"} />
    </div>
  )
}

export default Home
