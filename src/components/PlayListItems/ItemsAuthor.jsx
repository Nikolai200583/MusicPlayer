import * as Styled from './Styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useGetAllMusicQuery } from '../../redux/musicApi'
export const ItemsAuthor = ({ author, loading }) => {

    const {_, isLoading} = useGetAllMusicQuery();
    if (isLoading) return <p>Loading...</p>

    return (
                <Styled.trackAuthor>
                    {loading ? (
                        <Skeleton width={270} />
                    ) : (
                        <Styled.trackAuthorLink>
                            {author}
                        </Styled.trackAuthorLink>
                    )}
                </Styled.trackAuthor>
    
    );
};
