import PropTypes from 'prop-types'
import { Section } from './FormacoesStyled'

const Formacoes = ({ id })=>{
    return(
        <Section id={id}>
            <h1>Formações</h1>
            <h2>Algumas das minhas formações academicas.</h2>
            <ul>
                <li>
                    <p>Graduação em Análise e Desenvolvimento de Sistemas - UNOPAR</p>
                </li>
                <li>
                    <p>Curso Front End do básico ao avançado - DEVQUEST</p>
                </li>
                <li>
                    <p>Fundamentos de TI: Hardware e Software - FUNDAÇÂO BRADESCO</p>
                </li>
                <li>
                    <p>Gestão Financeira - SEBRAE</p>
                </li>
            </ul>
        </Section>
    )
}

Formacoes.propTypes = {
    id: PropTypes.string.isRequired
}

export { Formacoes }