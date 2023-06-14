import styled from 'styled-components';

export const filterDropdown = styled.ul`
    width: 135px;
    position: absolute;
    background-color: ${(props) => props.theme.backDrop};
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
    overflow-y: auto;
`;

export const dropdownItem = styled.li`
    padding: 10px;
    cursor: pointer;
    &.colors {
        color: purple
    };
    :hover {
        color: #ad61ff;
        cursor: pointer;
        text-decoration: underline;
    }
`;
