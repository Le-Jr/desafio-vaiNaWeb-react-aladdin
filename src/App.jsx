import React from "react";
import { useState } from "react";
import './style.scss'


function App() {

  const [genio, setGenio] = useState(false)



  return (
    <main>

      <h1>"Liberte a magia da programação com a lâmpada de Aladim."</h1>

      <section className="container">
        <img src={
          genio ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        } alt="Lampada do Gênio" className="lampada" />
        <button onClick={() => {
          setGenio(
            !genio
          )
        }}>Clique Aqui</button>
      </section>

    </main>
  )
}

export default App