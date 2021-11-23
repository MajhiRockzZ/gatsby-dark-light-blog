import React, { useContext } from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import ModeButton from "../components/ModeButton"
import Seo from "../components/Seo"
import { ModeContext } from "../context/ModeProvider"

export default function Home() {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <div>Hello world!</div>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Layout>
  )
}
