import * as Styled from './Styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const PlayListItem = ({
    titleTrack,
    titleSpan,
    author,
    album,
    time,
    loading,
}) => {
    return (
        <Styled.playlistItem>
            <Styled.playlistTrack>
                <Styled.trackTitle>
                    <Styled.trackTitleImage>
                        {loading ? (
                            <Skeleton width={51} height={51} />
                        ) : (
                            <Styled.trackTitleSvg alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </Styled.trackTitleSvg>
                        )}
                    </Styled.trackTitleImage>

                    <Styled.trackTitleText>
                        {loading ? (
                            <Skeleton width={330} />
                        ) : (
                            <Styled.trackTitleLink href="http://">
                                {titleTrack}
                                <Styled.trackTitleSpan>
                                    {titleSpan}
                                </Styled.trackTitleSpan>
                            </Styled.trackTitleLink>
                        )}
                    </Styled.trackTitleText>
                </Styled.trackTitle>

                <Styled.trackAuthor>
                    {loading ? (
                        <Skeleton width={270} />
                    ) : (
                        <Styled.trackAuthorLink href="http://">
                            {author}
                        </Styled.trackAuthorLink>
                    )}
                </Styled.trackAuthor>

                <Styled.trackAlbum>
                    {loading ? (
                        <Skeleton width={317} />
                    ) : (
                        <Styled.trackAlbumLink href="http://">
                            {album}
                        </Styled.trackAlbumLink>
                    )}
                </Styled.trackAlbum>

                <Styled.trackTime>
                    <Styled.trackTimeSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </Styled.trackTimeSvg>
                    <Styled.trackTimeText>{time}</Styled.trackTimeText>
                </Styled.trackTime>
            </Styled.playlistTrack>
        </Styled.playlistItem>
    );
};
