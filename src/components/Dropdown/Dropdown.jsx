import * as Styled from './Styles';
import { setFilterYears} from '../../redux/slices/setFilters';
import { useDispatch } from 'react-redux';

export const Dropdown = ({ data, category }) => { 
    const dispatch = useDispatch()
    

    const handleFilterYearClick = (item) => {
       switch (category) {
        case 'Год выпуска': dispatch(setFilterYears({
            years: item,
            
        }));
            
            break;
       
        default:
            break;
       }
    }
    return (
        <Styled.filterDropdown>
            {data.map((item, i) => (
                <Styled.dropdownItem key={i} onClick={() => handleFilterYearClick(item)}> {item} </Styled.dropdownItem>
            ))}
        </Styled.filterDropdown>
    );
};
