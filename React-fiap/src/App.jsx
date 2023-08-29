import Cabecalho from "./components/Cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import reactLogo from "./assets/react.svg";

export default function App() {

  let reactLogoAlt = "React Logo";

  return (
    <>
      <div className="container">

        <Cabecalho/>

        <img src={reactLogo} alt={reactLogoAlt} />

        <Section/>

        <Footer/>

      </div>
    </>
  )
}
