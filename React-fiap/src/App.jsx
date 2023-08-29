import React from "react"
import Cabecalho from "./components/cabecalho"
import Footer from "./components/footer"
import Section from "./components/section"

export default function App(){
  return(
    <>
      <div className="container">
          
      <Cabecalho></Cabecalho>
      <Section></Section>
      <Footer></Footer>

      </div>
    </>
  )
}