import { Main, Header, Menu, Info, Redes, Itens, HamburguerButton } from './HomeStyled'
import FotoDePerfil from '../../images/foto-de-perfil.jpg'
import Logo from '../../images/Logo.png'
import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaWhatsapp, } from 'react-icons/fa'
import { useState } from 'react'

const Home = ({ id })=>{
    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <Main id={id}>
        <Header $menuOpen={menuOpen}>
            <a href="#">
                <img src={Logo} alt="Logo LP" />
            </a>

            <HamburguerButton $menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
                <span />
                <span />
                <span />
            </HamburguerButton>

            <nav>
                <Menu>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#formacoes">Formações</a>
                    </li>
                    <li>
                        <a href="#tecnologias">Tecnologias</a>
                    </li>
                </Menu>
            </nav>
        </Header>
        
        <div>
            <img src={FotoDePerfil} alt="foto-portfolio" />
            <Info>
                <h1>Luan Pablo</h1>
                <h2>Web Developer</h2>
                <p>Me chamo Luan Pablo, sou programador front-end com sólida experiência em HTML, CSS, JavaScript, React e estudando TypeScript. Sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias, atualmente estou cursando Análise e Desenvolvimento de Sistemas. Tenho um grande interesse em soluções inovadoras e em criar interfaces web dinâmicas e intuitivas que proporcionem a melhor experiência ao usuário. Estou constantemente evoluindo e procurando novas oportunidades para expandir meus conhecimentos no desenvolvimento front-end.</p>
                <Redes>
                    <li>
                        <Itens href="https://wa.me/31999715582" target='_blank'>
                            <FaWhatsapp />
                            <p>Whatsapp</p>
                        </Itens>
                    </li>
                    <li>
                        <Itens href="https://www.instagram.com/lu4npz/" target='_blank'>
                            <FaInstagram />
                            <p>Instagram</p>
                        </Itens>
                    </li>
                    <li>
                        <Itens href="https://www.linkedin.com/in/luan-pablo-44916b275/" target='_blank'>
                            <FaLinkedin />
                            <p>Linkedin</p>
                        </Itens>
                    </li>
                    <li>
                        <Itens href="https://github.com/Lu4nPZ" target='_blank'>
                            <FaGithub />
                            <p>GitHub</p>
                        </Itens>
                    </li>
                    <li>
                        <Itens href="https://mail.google.com/mail/?view=cm&fs=1&to=luannovaes152@gmail.com&su=" target='_blank'>
                            <FaEnvelope />
                            <p>Email</p>
                        </Itens>
                    </li>
                </Redes>
            </Info>
        </div>
        </Main>
    )
}

Home.propTypes = {
    id: PropTypes.string.isRequired
}

export { Home }