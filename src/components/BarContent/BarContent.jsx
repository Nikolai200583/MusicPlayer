import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './Styles';

export const BarContent = (props) => {
    return (
        <Styled.barContent>
            <Styled.barPlayerProgress></Styled.barPlayerProgress>
            <Styled.barPlayerBlock>
                <Styled.barPlayer>
                    <Styled.playerControls>
                        <Styled.playerBtnPrev>
                            <Styled.playerBtnPrevSvg alt="prev">
                                <use xlinkHref={props.iconPrev}></use>
                            </Styled.playerBtnPrevSvg>
                        </Styled.playerBtnPrev>
                        <Styled.playerBtnPlay>
                            <Styled.playerBtnPlaySvg alt="play">
                                <use xlinkHref={props.iconPlay}></use>
                            </Styled.playerBtnPlaySvg>
                        </Styled.playerBtnPlay>
                        <Styled.playerBtnNext>
                            <Styled.playerBtnNextSvg alt="next">
                                <use xlinkHref={props.iconNext}></use>
                            </Styled.playerBtnNextSvg>
                        </Styled.playerBtnNext>
                        <Styled.playerBtnRepeat>
                            <Styled.playerBtnRepeatSvg alt="repeat">
                                <use xlinkHref={props.iconRepeat}></use>
                            </Styled.playerBtnRepeatSvg>
                        </Styled.playerBtnRepeat>
                        <Styled.playerBtnShuffle>
                            <Styled.playerBtnShuffleSvg alt="shuffle">
                                <use xlinkHref={props.iconShuffle}></use>
                            </Styled.playerBtnShuffleSvg>
                        </Styled.playerBtnShuffle>
                    </Styled.playerControls>

                    <Styled.playerTrackPlay>
                        <Styled.trackPlayContain>
                            <Styled.trackPlayImage>
                                {props.loading ? (
                                    <Skeleton width={51} height={51} />
                                ) : (
                                    <Styled.trackPlaySvg alt="music">
                                        <use xlinkHref={props.iconNotef}></use>
                                    </Styled.trackPlaySvg>
                                )}
                            </Styled.trackPlayImage>

                            <Styled.trackPlayAuthor>
                                {props.loading ? (
                                    <Skeleton />
                                ) : (
                                    <Styled.trackPlayAuthorLink href="http://">
                                        Ты та...
                                    </Styled.trackPlayAuthorLink>
                                )}
                            </Styled.trackPlayAuthor>
                            <Styled.trackPlayAlbum>
                                {props.loading ? (
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
                                <Styled.trackPlayLikeSvg alt="like">
                                    <use xlinkHref={props.iconLike}></use>
                                </Styled.trackPlayLikeSvg>
                            </Styled.trackPlayLike>
                            <Styled.trackPlayDislike>
                                <Styled.trackPlayDislikeSvg alt="dislike">
                                    <use xlinkHref={props.iconDislike}></use>
                                </Styled.trackPlayDislikeSvg>
                            </Styled.trackPlayDislike>
                        </Styled.trackPlayLikeDis>
                    </Styled.playerTrackPlay>
                </Styled.barPlayer>
                <Styled.barVolumeBlock>
                    <Styled.barVolumeContent>
                        <Styled.barVolumeImage>
                            <Styled.barVolumeSvg alt="volume">
                                <use xlinkHref={props.iconVolume}></use>
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
