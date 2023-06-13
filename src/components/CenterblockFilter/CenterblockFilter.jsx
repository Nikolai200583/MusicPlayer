import * as Styled from './Styles';
import React, { useState } from 'react';
import { CategoryButton } from '../CategoryButton/CategoryButton';
import { Dropdown } from '../Dropdown/Dropdown';
import { useGetAllMusicQuery} from '../../redux/musicApi';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilterYears, removeFilterAuthor, removeFilterGenre } from '../../redux/slices/setFilters';



export const CenterblockFilter = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const dispatch = useDispatch()
    const {data} = useGetAllMusicQuery();
    const authorTrack = data.map(item => item.author)
    const author = Array.from(new Set(authorTrack));

    const genreTrack = data.map(item => item.genre,)
    const genre = Array.from(new Set(genreTrack));

    const years = ['Сначала новые','Сначала старые']   
         
    
    const handleCategoryClick = (categoryName) => {
        if (activeCategory === categoryName) {
            setActiveCategory(null);
        } else {
            setActiveCategory(categoryName);
        }
    };
    const filterAuthor = useSelector(state => state.setFilters.author);
    const filterGenre = useSelector(state => state.setFilters.genre);
    const filterYears = useSelector(state => state.setFilters.years)
    
    
    
    return (
        <Styled.centerblockFilter>
            <Styled.filterTitle>Искать по:</Styled.filterTitle>
            <Styled.filterButtonBox>               
                    <Styled.filterBox>
                    <Styled.filterItems
                    onClick={() => dispatch(removeFilterAuthor())}
                    className={filterAuthor.length === 0 ? 'hidden' : ''}
                    > {filterAuthor.length} </Styled.filterItems>
                        <CategoryButton
                            category={'Исполнители'}
                            isActive={activeCategory === 'Исполнители'}
                            onClick={() => handleCategoryClick('Исполнители')}
                        />
                        {activeCategory === 'Исполнители' && (
                            <Dropdown data={author}
                            category={'Исполнители'}
                             />
                        )}
                        
                    </Styled.filterBox>
                    <Styled.filterBox>
                    <Styled.filterItems onClick={() => dispatch(removeFilterYears())}
                    className={filterYears.length === 0 ? 'hidden' : ''}> {filterYears.length === 0 ? '0' : '1'} </Styled.filterItems>
                        <CategoryButton
                            category={'Год выпуска'}
                            isActive={activeCategory === 'Год выпуска'}
                            onClick={() => handleCategoryClick('Год выпуска')}
                        />
                        {activeCategory === 'Год выпуска' && (
                            <Dropdown data={years}
                            category={'Год выпуска'}
                           />
                        )}
                         
                    </Styled.filterBox>
                    <Styled.filterBox>
                    <Styled.filterItems
                    onClick={() => dispatch(removeFilterGenre())} 
                    className={filterGenre.length === 0 ? 'hidden' : ''}> {filterGenre.length} </Styled.filterItems>
                        <CategoryButton
                            category={'Жанры'}
                            isActive={activeCategory === 'Жанры'}
                            onClick={() => handleCategoryClick('Жанры')}
                        />
                        {activeCategory === 'Жанры' && (
                            <Dropdown data={genre}
                            category={'Жанры'} />
                        )}                        
                    </Styled.filterBox>
                
            </Styled.filterButtonBox>
        </Styled.centerblockFilter>
    );
};
