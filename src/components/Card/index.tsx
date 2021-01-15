import React from 'react';

import { Container } from './styles';

interface iAmount {
    title: string;
    amount: any;
    total?: Function;
    style?: string;
}

const Card: React.FC<iAmount> = ({ title, amount, total, style }) => {

    function currencyFormat(num: number) {
        return 'R$' + num.toFixed(2).replace(/(\d)(?!\d)+(?=(\d{3}))/g, '$1,');
    }

    return (
        <Container className={style}>
            <h3>{title}</h3>
            <p>{currencyFormat(amount)}</p>
            <p>{total}</p>
        </Container>
    );
}

export default Card;