import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Hello Basit Maqsood</p>
      <Link to="/about">Goto About &rarr;</Link>
    </Layout>
  )
}
