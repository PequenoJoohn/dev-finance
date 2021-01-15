import React, { useState } from 'react';

import Card from '../../components/Card';

import { Container } from './styles';

const Bank: React.FC = () => {

    const [enter, setEnter] = useState(25219);
    const [exit, setExit] = useState(4250);
    const [total, setTotal] = useState();

    function calcAmount(total: number) {
        return total = enter + (-exit);
    }

    return (
        <Container>
            <header>
                <h1 id="logo">dev.finance$</h1>
            </header>

            <main className="container">
                <section id="balance">
                    <h2>Balanço</h2>

                    <Card title="Entradas" amount={enter} />

                    <Card title="Saídas" amount={exit} />

                    <Card title="Total" amount={calcAmount(exit)} style="total" />

                </section>

                <section id="transaction">
                    <h2>Transações</h2>

                    <table id="data-table">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="description">Luz</td>
                                <td className="expense">- R$500,00</td>
                                <td className="date">23/01/2021</td>
                            </tr>

                            <tr>
                                <td className="description">Criação de website</td>
                                <td className="income">R$5000,00</td>
                                <td className="date">23/01/2021</td>
                            </tr>

                            <tr>
                                <td className="description">Internet</td>
                                <td className="expense">- R$200,00</td>
                                <td className="date">23/01/2021</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>

            <footer>
                <p>dev.finance$</p>
            </footer>
        </Container>
    )
}

export default Bank;