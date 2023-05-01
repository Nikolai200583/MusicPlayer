import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './Styles';

export const BarContent = ({ loading }) => {
    return (
        <Styled.barContent>
            <Styled.barPlayerProgress></Styled.barPlayerProgress>
            <Styled.barPlayerBlock>
                <Styled.barPlayer>
                    <Styled.playerControls>
                        <Styled.playerBtnPrev>
                            <Styled.playerBtnPrevSvg alt="prev">
                                <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                            </Styled.playerBtnPrevSvg>
                        </Styled.playerBtnPrev>
                        <Styled.playerBtnPlay>
                            {' '}
                            {/*_btn */}
                            <Styled.playerBtnPlaySvg alt="play">
                                <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                            </Styled.playerBtnPlaySvg>
                        </Styled.playerBtnPlay>
                        <Styled.playerBtnNext>
                            <Styled.playerBtnNextSvg alt="next">
                                <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                            </Styled.playerBtnNextSvg>
                        </Styled.playerBtnNext>
                        <Styled.playerBtnRepeat>
                            {' '}
                            {/*_btn-icon */}
                            <Styled.playerBtnRepeatSvg alt="repeat">
                                <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                            </Styled.playerBtnRepeatSvg>
                        </Styled.playerBtnRepeat>
                        <Styled.playerBtnShuffle>
                            {' '}
                            {/*_btn-icon */}
                            <Styled.playerBtnShuffleSvg alt="shuffle">
                                <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                            </Styled.playerBtnShuffleSvg>
                        </Styled.playerBtnShuffle>
                    </Styled.playerControls>

                    <Styled.playerTrackPlay>
                        {/*track-play */}
                        <Styled.trackPlayContain>
                            <Styled.trackPlayImage>
                                {loading ? (
                                    <Skeleton width={51} height={51} />
                                ) : (
                                    <Styled.trackPlaySvg alt="music">
                                        <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                                    </Styled.trackPlaySvg>
                                )}
                            </Styled.trackPlayImage>

                            <Styled.trackPlayAuthor>
                                {loading ? (
                                    <Skeleton />
                                ) : (
                                    <Styled.trackPlayAuthorLink href="http://">
                                        Ты та...
                                    </Styled.trackPlayAuthorLink>
                                )}
                            </Styled.trackPlayAuthor>
                            <Styled.trackPlayAlbum>
                                {loading ? (
                                    <Skeleton />
                                ) : (
                                    <Styled.trackPlayAlbumLink href="http://">
                                        Баста
                                    </Styled.trackPlayAlbumLink>
                                )}
                            </Styled.trackPlayAlbum>
                        </Styled.trackPlayContain>

                        <Styled.trackPlayLikeDis>
                            <Styled.trackPlayLike>
                                {/*_btn-icon */}
                                <Styled.trackPlayLikeSvg alt="like">
                                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                                </Styled.trackPlayLikeSvg>
                            </Styled.trackPlayLike>
                            <Styled.trackPlayDislike>
                                {/*_btn-icon */}
                                <Styled.trackPlayDislikeSvg alt="dislike">
                                    <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                                </Styled.trackPlayDislikeSvg>
                            </Styled.trackPlayDislike>
                        </Styled.trackPlayLikeDis>
                    </Styled.playerTrackPlay>
                </Styled.barPlayer>
                <Styled.barVolumeBlock>
                    <Styled.barVolumeContent>
                        <Styled.barVolumeImage>
                            <Styled.barVolumeSvg alt="volume">
                                <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                            </Styled.barVolumeSvg>
                        </Styled.barVolumeImage>
                        <Styled.barVolumeProgress>
                            <Styled.barVolumeProgressLine
                                type="range"
                                name="range"
                            />{' '}
                            {/*_btn */}
                        </Styled.barVolumeProgress>
                    </Styled.barVolumeContent>
                </Styled.barVolumeBlock>
            </Styled.barPlayerBlock>
        </Styled.barContent>
    );
};
