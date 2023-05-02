import * as Styled from './Styles';

export const CategoryButton = ({ category, isActive, onClick }) => {
    return (
        <Styled.filterButton
            className={isActive ? 'activeButton' : ' '}
            onClick={onClick}
        >
            {category}
        </Styled.filterButton>
    );
};
