import { useState, useRef, useEffect} from 'react';
import { useAudio } from "react-use"
import { useDispatch } from 'react-redux';
import { setCurrentTrack} from '../../redux/slices/setTracks';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as Styled from './Styles';
import {useTrack} from "../../hooks/use-track"

export const BarContent = (props) => {
    const dispatch = useDispatch()  
    
    const [isShuffle, setShuffle] = useState(false)
    const [isRepeat, setRepeat] = useState(false)    
    const [currentSong, setCurrentSong] = useState();   
    const clickRef = useRef();
    const {id, name, author} = useTrack();
    
    const tracks = props.tracks 

    let index = tracks.findIndex((track) => track.id === id);    
    if (index < 0) {
        index = 0
    }
   
    const playingTrack = tracks[index];    
 

    const [audio, state, controls,] = useAudio({
        
        src: playingTrack.track_file,
        autoPlay: true,
        onEnded: () => {
          if (!isRepeat) {
            handleNext()
          } else {
            controls.seek(0)
            controls.play()
          }
        },
      })
      const handleNext = () => {
        if (isShuffle) {
          index = Math.floor(Math.random() * tracks.length)
          
        } else index++
    
        index = index > tracks.length - 1 ? 0 : tracks[index]
        
        dispatch(setCurrentTrack({
            track: index,            
        }),       
        );
      }
      const handlePrev = () => {
        if (isShuffle) {
            index = Math.floor(Math.random() * tracks.length)
        } else index--
    
        index = index < 0 ? 0 : tracks[index]
        dispatch(setCurrentTrack({
            track: index,            
        }),       
        );
      }
  
     
    useEffect(() => {
        const duration = state.duration;
        const ct = state.time;
        
        setCurrentSong({
            ...currentSong,
            progress: (ct / duration) * 100,
            length: duration,
        });        
    },[state])
   
        const handleValueChange = (event) => {
          controls.volume(Number(event.target.value) / 10)
        }
        
    useEffect(() => {
        controls.volume(0.5)
      }, [])


    const checkWidth = (e) => {
        if(clickRef.current){
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        const divprogress = (offset / width) * 100;
        controls.seek(state.duration * (divprogress / 100)) ;
        }
    };   
    return (
        <Styled.barContent>
            {audio}
            <Styled.barPlayerProgress>
                <Styled.navigationWrapper onClick={checkWidth} ref={clickRef}>
                    <Styled.seekBar
                        style={{
                            width: currentSong ? `${currentSong.progress + '%'}` : '',
                        }}
                    ></Styled.seekBar>
                </Styled.navigationWrapper>
            </Styled.barPlayerProgress>
            <Styled.barPlayerBlock>
                <Styled.barPlayer>
                    <Styled.playerControls>
                        <Styled.playerBtnPrev>
                            <Styled.playerBtnPrevSvg
                            onClick={() => handlePrev()}
                            alt="prev">
                                <use xlinkHref={props.iconPrev}></use>
                            </Styled.playerBtnPrevSvg>
                        </Styled.playerBtnPrev>
                        <Styled.playerBtnPlay>
                            <Styled.playerBtnPlaySvg
                                onClick={state.playing ? controls.pause: controls.play}
                                alt="play"
                            >
                                <use xlinkHref={state.playing ? props.iconPause : props.iconPlay}></use>
                            </Styled.playerBtnPlaySvg>
                        </Styled.playerBtnPlay>
                        <Styled.playerBtnNext>
                            <Styled.playerBtnNextSvg
                             onClick={() => handleNext()}
                             alt="next">
                                <use xlinkHref={props.iconNext}></use>
                            </Styled.playerBtnNextSvg>
                        </Styled.playerBtnNext>
                        <Styled.playerBtnRepeat>
                            <Styled.playerBtnRepeatSvg
                            onClick={() => setRepeat(!isRepeat)}
                            alt="repeat">
                                <use xlinkHref={props.iconRepeat} stroke={isRepeat ? 'purple' : ''}></use>
                            </Styled.playerBtnRepeatSvg>
                        </Styled.playerBtnRepeat>
                        <Styled.playerBtnShuffle>
                            <Styled.playerBtnShuffleSvg
                            onClick={() => setShuffle(!isShuffle)}
                            alt="shuffle">
                                <use xlinkHref={props.iconShuffle} stroke={isShuffle ? 'purple' : ''}></use>
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
                                       {name}
                                    </Styled.trackPlayAuthorLink>
                                )}
                            </Styled.trackPlayAuthor>
                            <Styled.trackPlayAlbum>
                                {props.loading ? (
                                    <Skeleton />
                                ) : (
                                    <Styled.trackPlayAlbumLink href="http://">
                                        {author}
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
                            <Styled.barVolumeSvg
                             onClick={state.muted ? controls.unmute: controls.mute} alt="volume">
                             <use xlinkHref={props.iconVolume} stroke={state.muted ? 'red' : ''}></use>
                            </Styled.barVolumeSvg>
                        </Styled.barVolumeImage>
                        <Styled.barVolumeProgress>
                            <Styled.barVolumeProgressLine
                                type="range"
                                name="range" 
                                min="0" 
                                max="10"
                                defaultValue={state.volume * 10} onChange={handleValueChange}                              
                            />
                        </Styled.barVolumeProgress>
                    </Styled.barVolumeContent>
                </Styled.barVolumeBlock>
            </Styled.barPlayerBlock>
        </Styled.barContent>
    );
};
