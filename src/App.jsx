import { Home } from './componentes/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { Projetos } from './componentes/Projetos/Projetos'
import { Formacoes } from './componentes/Formacoes/Formacoes'
import { Tecnologias } from './componentes/Tecnologias/Tecnologias'
import { Footer } from './AppStyled'
import Logo from './images/Logo.png'

const GlobalStyle = createGlobalStyle`
  html{
    background-color: #0f0f0f;
    scroll-behavior: smooth;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Oxanium", sans-serif;
  }

  a{
    text-decoration: none;
    color: #000;
  }

  li{
    list-style: none;
  }
`
function App() {

  return (
    <>
      <GlobalStyle />
      <Home id='home'/>
      <Projetos id='projetos'/>
      <Formacoes id='formacoes'/>
      <Tecnologias id='tecnologias'/>
      <Footer>
        <p>Site produzido por Luan Pablo</p>
        <img src={Logo} alt="logo" />
      </Footer>
    </>
  )
}

export default App
