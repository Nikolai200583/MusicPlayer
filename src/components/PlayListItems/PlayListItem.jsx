import * as Styled from './Styles';
import React, {useState, useEffect} from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { usePostLikeMutation, usePostUnlikeMutation } from '../../redux/musicApi'
import { setCurrentTrack} from '../../redux/slices/setTracks';
import { useDispatch } from 'react-redux';
export const PlayListItem = ({
    track,
    titleTrack,
    titleSpan,
    author,
    album,
    time,
    loading,
}) => {
    const { id: trackID, stared_user} = track;

    const [postLike] = usePostLikeMutation();
    const [postUnlike] = usePostUnlikeMutation();
    const dispatch = useDispatch()

    const userId = Number(localStorage.getItem('user'));
  
    const [isFavourite, setFavourite] = useState(false)

    useEffect(() => {
        setFavourite(stared_user.some((user) => user.id === userId))
      }, [track])

      const handleFavorite = () => {
        if (isFavourite) postUnlike(trackID)
        else postLike(trackID)
      }

      const handleOnRowClick = () => {
        dispatch(setCurrentTrack({
            track: track,            
        }),       
        );        
      }
    return (
        <Styled.playlistItem onClick={() => handleOnRowClick()}>
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
                    <Styled.trackTimeSvg alt="time"  onClick={handleFavorite}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" fill={isFavourite ? 'red' : 'gray'}></use>
                    </Styled.trackTimeSvg>
                    <Styled.trackTimeText>{time}</Styled.trackTimeText>
                </Styled.trackTime>
            </Styled.playlistTrack>
        </Styled.playlistItem>
    );
};
