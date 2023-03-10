import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
    width: 1269px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
    padding: 30px;
`;

export default function CardList(props) {
    return <StyledCardList>{props.children}</StyledCardList>;
}
