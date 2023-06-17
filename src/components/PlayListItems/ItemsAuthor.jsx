import * as Styled from './Styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ItemsAuthor = ({ author, loading }) => {
    
    return (
                <Styled.trackAuthor>
                    {loading ? (
                        <Skeleton width={270} />
                    ) : (
                        <Styled.trackAuthorLink href="http://">
                            {author}
                        </Styled.trackAuthorLink>
                    )}
                </Styled.trackAuthor>
    
    );
};
