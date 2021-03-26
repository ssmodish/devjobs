import Head from 'next/head'
import Layout from '../components/Layout'

import Hero from '../components/Hero'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div>
        Home Page
        <Hero />
      </div>
    </Layout>
  )
}
