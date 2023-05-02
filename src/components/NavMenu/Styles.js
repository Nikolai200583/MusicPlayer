import styled from 'styled-components';

export const navMenuActiv = styled.div`
    .navMenu {
        display: block;
        visibility: visible;
        position: fixed;
        width: 100vw;
        height: 100vh;
        transform: translateX(-100%);
        transition: all 3s;
    }

    .activ {
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
export const menuLink = styled.a`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;
