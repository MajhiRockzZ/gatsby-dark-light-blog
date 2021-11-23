import React, { useContext } from "react"
import Layout from "../components/Layout"
import ModeButton from "../components/ModeButton"
import { ModeContext } from "../context/ModeProvider"

export default function Home() {
  const [darkMode, setDarkMode] = useContext(ModeContext)

  return (
    <Layout>
      <div>Hello world!</div>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Layout>
  )
}
