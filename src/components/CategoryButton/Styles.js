import styled from 'styled-components';

export const filterButton = styled.button`
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    background-color: #181818;
    color: #ffffff;
`;

export const ActiveButton = styled(filterButton)`    
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
`;
