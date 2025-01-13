import styled from "styled-components";

const MeusProjetos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;

    h1{
        color: #fff;
        margin-bottom: 3rem;
        font-size: 2rem;

        @media (max-width: 428px){
            font-size: 1.5rem;
        }
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
    }
`

const ImgContainer = styled.div`
    width: 20rem;
    height: 30rem;
    overflow: hidden;
    position: relative;
    border-radius: 0.8rem;

    img{
        transition: transform 0.3s ease;
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: 0.3s ease-in-out;

        &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
    }

    @media (max-width: 428px){
        height: 20rem;
    }
`

const TextOverlay = styled.div`
    position: absolute;
    top: 42.5rem;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    background: #7f7f7f;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    width: 100%;
    height: 100%;

    @media (max-width: 428px){
        top: 27.2rem;
    }
`

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    background: #7f7f7f;
    padding: 2rem;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    text-align: center;
    position: relative;

    h3{
        margin-bottom: 1rem;
        color: #fff;
    }
`

const ModalButton = styled.button`
    background-color: #4caf50;
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
        background-color: #45a049;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1.2rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    color: #fff;

    &:hover {
        color: #ff0000;
    }
`

export { MeusProjetos, ImgContainer, TextOverlay, ModalOverlay, ModalContent, ModalButton, CloseButton }