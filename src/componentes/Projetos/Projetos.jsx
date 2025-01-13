import { useState } from 'react'
import PropTypes from 'prop-types'
import { MeusProjetos, ImgContainer, TextOverlay, ModalOverlay, ModalContent, ModalButton, CloseButton } from './ProjetosStyled'
import ImgGTA6 from '../../images/GTA6.png'
import ImgAppMarketplace from '../../images/app-marketplace.jpeg'
import ImgMortalKombat from '../../images/mortal-kombat.png'
import ImgGitHub from '../../images/github.png'
import ImgCarros from '../../images/carros.png'
import ImgPokemon from '../../images/pokemon.png'

const Projetos = ({ id })=>{
    const [isModalOpen, setisModalOpen] = useState(false)
    const [pageLink, setPageLink] = useState('')
    const [repoLink, setRepoLink] = useState('')

    const handleImageClick = (page, repo)=>{
        setPageLink(page)
        setRepoLink(repo)
        setisModalOpen(true);
    }

    const handleCloseModal = ()=>{
        setisModalOpen(false);
    }

    return(
        <MeusProjetos id={id}>
            <h1>Principais projetos</h1>
            <ul>
                <li>
                    <a href="#" onClick={(e)=> { e.preventDefault(); handleImageClick('https://lu4npz.github.io/pagina-de-compra-gta6/', 'https://github.com/Lu4nPZ/pagina-de-compra-gta6'); }} >
                        <ImgContainer>
                            <img src={ImgGTA6} alt="GTA6" />
                            <TextOverlay>Página de compra GTA6</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
                <li>
                    <a href="" onClick={(e)=> { e.preventDefault(); handleImageClick('https://github.com/Lu4nPZ/app-marketplace', 'https://github.com/Lu4nPZ/app-marketplace'); }}>
                        <ImgContainer>
                            <img src={ImgAppMarketplace} alt="app-marketplace" />
                            <TextOverlay>Aplicativo Marketplace</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
                <li>
                    <a href="" onClick={(e)=> { e.preventDefault(); handleImageClick('https://lu4npz.github.io/projeto-mortal-kombat/', 'https://github.com/Lu4nPZ/projeto-mortal-kombat'); }}>
                        <ImgContainer>
                            <img src={ImgMortalKombat} alt="mortal-kombat" />
                            <TextOverlay>Mortal Kombat</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
                <li>
                    <a href="" onClick={(e)=> { e.preventDefault(); handleImageClick('https://lu4npz.github.io/fetch-com-github/', 'https://github.com/Lu4nPZ/fetch-com-github'); }}>
                        <ImgContainer>
                            <img src={ImgGitHub} alt="github" />
                            <TextOverlay>Perfil GitHub</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
                <li>
                    <a href="" onClick={(e)=> { e.preventDefault(); handleImageClick('https://lu4npz.github.io/selecao-de-personagens-carros/', 'https://github.com/Lu4nPZ/selecao-de-personagens-carros'); }}>
                        <ImgContainer>
                            <img src={ImgCarros} alt="carros" />
                            <TextOverlay>Personagens Carros</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
                <li>
                    <a href="" onClick={(e)=> { e.preventDefault(); handleImageClick('https://lu4npz.github.io/projeto-listagem-pokemon/', 'https://github.com/Lu4nPZ/projeto-listagem-pokemon'); }}>
                        <ImgContainer>
                            <img src={ImgPokemon} alt="pokemon" />
                            <TextOverlay>Personagens Pokemon</TextOverlay>
                        </ImgContainer>
                    </a>
                </li>
            </ul>

            {
                isModalOpen && (
                    <ModalOverlay onClick={handleCloseModal}>
                        <ModalContent onClick={(e)=> e.stopPropagation()}>
                            <CloseButton onClick={handleCloseModal}>X</CloseButton>
                            <h3>Escolha onde deseja visualizar o projeto</h3>
                            <ModalButton onClick={() => window.open(pageLink, '_blank')} >
                                Ver Página
                            </ModalButton>
                            <ModalButton onClick={() => window.open(repoLink, '_blank')} >
                                Ver Repositório
                            </ModalButton>
                        </ModalContent>
                    </ModalOverlay>
                )
            }
        </MeusProjetos>
    )
}

Projetos.propTypes = {
    id: PropTypes.string.isRequired,
}

export { Projetos }