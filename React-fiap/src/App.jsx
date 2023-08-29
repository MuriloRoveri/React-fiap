import React from "react"
import Cabecalho from "./components/cabecalho"

export default function App(){
  return(
    <>
      <div className="container">
          
          <Cabecalho></Cabecalho>

          <section>
            <p><a href='/'>HomePage</a></p>
                <button onClick={() => alert("hello wordl")}>Click Me</button>
          </section>
          <footer>
              <p>&copy; 2021, vite.js and React</p>
          </footer>
      </div>
    </>
  )
}