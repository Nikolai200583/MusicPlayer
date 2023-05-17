import styled from 'styled-components';

export const navBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
`;

export const burgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.spanBurger} 
`;
