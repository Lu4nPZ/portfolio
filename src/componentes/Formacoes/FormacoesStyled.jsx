import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 5rem;

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
        text-align: center;

        @media (max-width: 428px){
            font-size: 1rem;
        }
    }

    ul{
        background-color: #7f7f7f;
        border-radius: 0.5rem;
        padding: 2rem;
        width: 40rem;

        @media (max-width: 660px){
            width: 25rem;
        }

        @media (max-width: 428px){
            width: 20rem;
        }
    }

    li{
        color: #fff;
        list-style-type: square;

        p{
            font-size: 1rem;
            margin-bottom: 1rem;

            @media (max-width: 428px){
                font-size: 0.8rem;
            }
        }

        &:last-child p:last-of-type{
            margin-bottom: 0;
        }
    }
`

export { Section }