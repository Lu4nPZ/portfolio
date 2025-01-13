import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

    h1{
        color: #fff;
        font-size: 2.5rem;

        @media (max-width: 428px){
            font-size: 1.5rem;
        }
    }

    h2{
        color: #fff;
        font-size: 1.2rem;
        margin-bottom: 3rem;
        text-align: center;

        @media (max-width: 428px){
            font-size: 1rem;
        }
    }

    a{
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #fff;
        color: #000;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #7f7f7f;
    width: 20rem;
    height: 30rem;
    padding: 2rem;
    border-radius: 0.8rem;
    gap: 2rem;

    @media (max-width: 428px){
        height: 20rem;
    }

    h2{
        color: #fff;
        margin: 0;
    }

    img{
        width: 12rem;

        @media (max-width: 428px){
            width: 5rem;
        }
    }

    p{
        max-height: 8rem;
        overflow-y: scroll;
        font-size: 1rem;
        padding-right: rem;
        text-align: center;
        margin: 0;
        color: #fff;
    }

    *::-webkit-scrollbar {
        width: 0.7rem;
    }

    *::-webkit-scrollbar-track {
        background: #f1e9e9;
        border-radius: 1rem;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #4caf50;
        border-radius: 1rem;
        border: 0.2rem solid #ffffff;
        cursor: pointer;
    }
`

export { Section, Div, Card }