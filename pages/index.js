import Head from "next/head"
import styles from "../styles/Home.module.css"
import { getUsers } from '../utils/users.js'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next.js
        </h1>

      </main>

    </div>
  );
}
