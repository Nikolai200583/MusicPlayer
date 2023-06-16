import * as Styled from './Styles';

export const CategoryButton = ({ category, isActive, dataTestId, onClick }) => {
    return (
        <Styled.filterButton
        
            className={isActive ? 'activeButton' : ' '}
            onClick={onClick}
            data-testid={dataTestId}
        >
            
            {category}
        </Styled.filterButton>
    );
};
