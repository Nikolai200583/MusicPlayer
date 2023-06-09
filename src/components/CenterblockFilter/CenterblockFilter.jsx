import * as Styled from './Styles';
import React, { useState } from 'react';
import { CategoryButton } from '../CategoryButton/CategoryButton';
import { Dropdown } from '../Dropdown/Dropdown';
import { useGetAllMusicQuery} from '../../redux/musicApi';

export const CenterblockFilter = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    
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
    return (
        <Styled.centerblockFilter>
            <Styled.filterTitle>Искать по:</Styled.filterTitle>
            <Styled.filterButtonBox>               
                    <div>
                        <CategoryButton
                            category={'Исполнители'}
                            isActive={activeCategory === 'Исполнители'}
                            onClick={() => handleCategoryClick('Исполнители')}
                        />
                        {activeCategory === 'Исполнители' && (
                            <Dropdown data={author} />
                        )}
                    </div>
                    <div>
                        <CategoryButton
                            category={'Год выпуска'}
                            isActive={activeCategory === 'Год выпуска'}
                            onClick={() => handleCategoryClick('Год выпуска')}
                        />
                        {activeCategory === 'Год выпуска' && (
                            <Dropdown data={years} />
                        )}
                    </div>
                    <div>
                        <CategoryButton
                            category={'Жанры'}
                            isActive={activeCategory === 'Жанры'}
                            onClick={() => handleCategoryClick('Жанры')}
                        />
                        {activeCategory === 'Жанры' && (
                            <Dropdown data={genre} />
                        )}
                    </div>
                
            </Styled.filterButtonBox>
        </Styled.centerblockFilter>
    );
};
