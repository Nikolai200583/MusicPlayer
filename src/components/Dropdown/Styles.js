import styled from 'styled-components';

export const filterDropdown = styled.div`
    width: 135px;
    position: absolute;
    background-color: #313131;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
`;

export const dropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    :hover {
        color: #ad61ff;
        cursor: pointer;
        text-decoration: underline;
    }
`;