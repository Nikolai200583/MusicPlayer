import styled from 'styled-components';

export const filterButton = styled.button`
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: ${(props) => props.theme.border};
    border-radius: 60px;
    padding: 6px 20px;
    background-color:  ${(props) => props.theme.body};
    color: ${(props) => props.theme.title};

    &.activeButton {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
    }    
   
   
`;
