import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const navMenuActiv = styled.div`
    &.navMenu {
        display: block;
        visibility: visible;
        position: fixed;
        width: 100vw;
        height: 100vh;
        transform: translateX(-100%);
        transition: all 3s;   
        
    }

    &.active {
        transform: translateX(0);
        transition: all 0.5s;
    }
`;

export const menuList = styled.ul`
    padding: 18px 0 10px 0;
    width: 100%;
    height: 100%;
`;
export const menuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;
export const menuLink = styled(Link)`
    color: ${(props) => props.theme.title};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;    
`;
export const themeSvg = styled.svg`
    width: 39px;
    height: 39px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`;
