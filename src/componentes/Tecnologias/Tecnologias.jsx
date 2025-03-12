import { Section, Div, Card, } from './TecnologiasStyled'
import PropTypes from 'prop-types'
import { FaArrowUp } from 'react-icons/fa'

const Tecnologias = ({ id })=>{
    return(
        <Section id={id}>
            <h1>Tecnologias</h1>
            <h2>Essas são algumas das tecnologias que eu trabalho e estudo constantemente.</h2>
            <Div>
                <Card>
                    <h2>JavaScript</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="JavaScript" />
                    <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web</p>
                </Card>
                <Card>
                    <h2>HTML5</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" />
                    <p>HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.</p>
                </Card>
                <Card>
                    <h2>CSS</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS" />
                    <p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags style. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos.</p>
                </Card>
                <Card>
                    <h2>React</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
                    <p>O React é uma biblioteca JavaScript que serve para criar interfaces de usuário (UI) em aplicativos web. É uma ferramenta popular para desenvolvimento front-end, usada por muitas empresas de tecnologia, como o Facebook, Instagram e Airbnb.</p>
                </Card>
                <Card>
                    <h2>Git</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" />
                    <p>O Git é um sistema de controle de versão de arquivos; em outras palavras, é responsável por guardar o histórico de alterações sempre que alguém modificar algum arquivo que está sendo monitorado por ele.</p>
                </Card>
                <Card>
                    <h2>GitHub</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" />
                    <p>GitHub hospeda repositórios do Git e fornece aos desenvolvedores ferramentas para enviar um código melhor por meio das funcionalidades de linha de comando, problemas, pull requests, revisão de código ou o uso de uma coleção de aplicativos grátis e para compra em GitHub Marketplace.</p>
                </Card>
                <Card>
                    <h2>TypeScript</h2>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
                    <p>ypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem. Tipos fornecem uma maneira de descrever a forma de um objeto, fornecendo melhor documentação e permitindo que o TypeScript valide se seu código está funcionando corretamente.</p>
                </Card>
            </Div>
            <a href="#home">Voltar para o início <FaArrowUp /></a>
        </Section>
    )
}

Tecnologias.propTypes = {
    id: PropTypes.string.isRequired
}

export { Tecnologias }