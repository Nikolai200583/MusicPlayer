import * as Styled from './Styles';
import { setFilterYears, setFilterAuthor, setFilterGenre} from '../../redux/slices/setFilters';
import { useDispatch, useSelector } from 'react-redux';

export const Dropdown = ({ data, category }) => {     const dispatch = useDispatch()
    const filterAuthor = useSelector(state => state.setFilters.author);
    const filterGenre = useSelector(state => state.setFilters.genre);
    const filterYears = useSelector(state => state.setFilters.years)

    const handleFilterClick = (item) => {
        
       switch (category) {
        case 'Год выпуска': dispatch(setFilterYears({
            years: item,            
        }));           
            break;
        case 'Исполнители': dispatch(setFilterAuthor({
            author: item,            
        }));           
                break;
        case 'Жанры': dispatch(setFilterGenre({
            genre: item,            
        }));           
                break;
        default:
            break;
       }
    }
    
    return (
        <Styled.filterDropdown>
            {data.map((item, i) => (
                <Styled.dropdownItem 
                key={i}
                className={filterAuthor.includes(item) || filterGenre.includes(item) || filterYears.includes(item) ? 'colors' : ''} 
                onClick={() => handleFilterClick(item)}> {item}             
                 </Styled.dropdownItem>
            ))}
        </Styled.filterDropdown>
    );
};
