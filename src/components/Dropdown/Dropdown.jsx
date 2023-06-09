import * as Styled from './Styles';

export const Dropdown = ({ data }) => {


    return (
        <Styled.filterDropdown>
            {data.map((item) => (
                <Styled.dropdownItem key={item}>{item}</Styled.dropdownItem>
            ))}
        </Styled.filterDropdown>
    );
};
