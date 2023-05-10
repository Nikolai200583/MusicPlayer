import styled from 'styled-components';

export const sidebarItem = styled.li`
    width: 250px;
    height: 150px;

    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const sidebarLink = styled.a`
    width: 100%;
    height: 100%;
`;

export const sidebarImg = styled.img`
    width: 100%;
    height: auto;
`;
