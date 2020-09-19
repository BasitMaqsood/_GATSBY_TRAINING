import React from "react"
import { Link } from 'gatsby'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Hello Basit Maqsood</p>
      <Link to="/about">Goto About &rarr;</Link>

    </>
  )
}
