import styled from 'styled-components';

export const filter = styled.div``;

export const centerblockFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
    color: ${(props) => props.theme.title};
`;

export const filterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
   
`;
export const filterButtonBox = styled.div`
    display: flex;
    gap: 10px;
  
`;
export const filterBox = styled.div`
    position: relative;

`;
export const filterItems = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 27px;
    right:5px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: purple;
    cursor: pointer;

    &.hidden {
       display: none
    }
    
`
