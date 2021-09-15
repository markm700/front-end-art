import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Show from '../comps/shows'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let nxtTitles = ["NXT Men's Championship","NXT Women's Championship","North American Championship","NXT Men's Tag Team Championships","NXT Women's Tag Team Championships"]
  return (
    <div>
      <div className={styles.containerleft}>
        <Image
          src="/wwelogo.jpeg"
          width={100}
          height={850}
        />
      </div>
      <div className={styles.container}>
        <Head>
          <title className={styles.title}>Wrestling Hub</title>
        </Head>
        <Show name={"WWE NXT"} titles={nxtTitles} rosterSize={2} />
      </div>
      <div className={styles.containerright}>
        <Image
          src="/aewlogo.png"
          width={200}
          height={850}
        />
      </div>   
    </div>
  )
}

export default Home
