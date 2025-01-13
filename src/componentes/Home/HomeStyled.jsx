import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem 0 9rem 0;
        flex-direction: column;

        img{
            width: 15rem;
            border-radius: 50%;
        }
    }
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
    border: 0.1rem solid #666;
    border-radius: 0 0 1rem 1rem;
    background-color: #000;
    width: 80%;

    h2 a{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
    }

    img{
        width: 3rem;
        margin-left: 1rem;

        @media (max-width: 428px){
            width: 2rem;
        }
    }

    nav {
        @media (max-width: 800px) {
            display: ${({ $menuOpen }) => ($menuOpen ? 'block' : 'none')};
            position: absolute;
            top: 7%;
            right: 7.5%;
            background-color: #000;
            padding: 1rem;
            border: 0.1rem solid #666;
            border-radius: 0.5rem;
        }
    }
`

const Menu = styled.menu`
    display: flex;
    align-items: center;

    li{
        height: 2rem;
        display: flex;
        align-items: center;
        
        a{
            font-size: 1.0rem;
            color: #fff;
            padding: 2rem 1.5rem;
            transition: 0.3s ease-in-out;
        }

        a:hover{
            border-bottom: 0.2rem solid #4caf50;
            color: #4caf50;

            @media (max-width: 800px){
                border-bottom: none;
            }
        }
    }

    @media (max-width: 800px){
        flex-direction: column;
        gap: 1rem;
    }
`

const HamburguerButton = styled.button`
    display: none;
    position: relative;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background: transparent;
    border: none;

    @media (max-width: 428px){
        width: 1.5rem;
    }

    @media (max-width: 800px){
        display: flex;
    }

    span {
        position: absolute;
        width: 100%;
        height: 0.3rem;
        background: #fff;
        border-radius: 0.2rem;
        transition: transform 0.3s ease, top 0.3s ease, opacity 0.3s ease;

        @media (max-width: 428px){
            height: 0.2rem;
        }

        &:nth-child(1) {
            top: ${({ $menuOpen }) => ($menuOpen ? '1rem' : '0.3rem')};
            transform: ${({ $menuOpen }) => ($menuOpen ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2) {
            top: 1rem;
            opacity: ${({ $menuOpen }) => ($menuOpen ? '0' : '1')};
        }
        &:nth-child(3) {
            top: ${({ $menuOpen }) => ($menuOpen ? '1rem' : '1.7rem')};
            transform: ${({ $menuOpen }) => ($menuOpen ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`

const Info = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;

    h1{
        color: #fff;
        font-size: 4rem;
        text-align: center;

        @media (max-width: 428px){
            font-size: 2.5rem;
        }
    }

    h2{
        color: #fff;
        font-size: 2rem;
        
        @media (max-width: 428px){
            font-size: 1.5rem;
        }
    }

    p{
        color: #fff;
        line-height: 1.5;
        text-align: center;
        width: 70%;

        @media (max-width: 428px){
            font-size: 0.9rem;
        }
    }
`

const Redes = styled.ul`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`

const Itens = styled.a`
    display: flex;
    align-items: center;
    color: #4caf50;
    font-size: 1.3rem;

    p{
        color: #fff;
        font-size: 1rem;
        margin-left: 0.2rem;
        transition: 0.2s ease-in-out;
    }

    p:hover{
        color: #4caf50; 
    }
`

export { Main, Header, Menu, Info, Redes, Itens, HamburguerButton }