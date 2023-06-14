import * as Styled from '../../components/App/Styles';
import { PlayListItem } from '../../components/PlayListItems/PlayListItem';
import { Logo } from '../../components/Logo/Logo';
import { NavBurger } from '../../components/NavBurger/NavBurger';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { SideBar } from '../../components/SideBar/SideBar';
import { BarContent } from '../../components/BarContent/BarContent';
import { useState, useEffect } from 'react';
import { CenterblockFilter } from '../../components/CenterblockFilter/CenterblockFilter';
import { SELECTIONS } from '../../Constants/selection';
import { useGetAllMusicQuery} from '../../redux/musicApi';
import { useSelector, useDispatch } from "react-redux";
import { setFilterInp} from '../../redux/slices/setFilters';
import {useTrack} from "../../hooks/use-track"

export const Main = ({onToggle, lightTheme, darkTheme, isDarkTheme}) => {
  
    const [menuActive, setMenuActive] = useState(false);
    const [isLoad, setLoading] = useState(true); 
    const dispatch = useDispatch()
    const {id} = useTrack();
    
   
    const {data, isLoading} = useGetAllMusicQuery();
    const filterAuthor = useSelector(state => state.setFilters.author);
    const filterGenre = useSelector(state => state.setFilters.genre);
    const filterYears = useSelector(state => state.setFilters.years)
    const filterSerchInp = useSelector(state => state.setFilters.serchInp)    
    
    let TRACKS = data;
    
   
    switch (filterYears) {
    case 'Сначала новые': TRACKS = TRACKS.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(adate).valueOf()) - (new Date(bdate).valueOf()));   
        break;
        case 'Сначала старые':TRACKS = TRACKS.filter((element) => element).sort(({release_date: adate}, {release_date: bdate}) => (new Date(bdate).valueOf()) - (new Date(adate).valueOf()))            
        break;
    default:
        break;
}

    if ( filterAuthor.length > 0) {

        TRACKS = TRACKS.filter(({ author }) => filterAuthor.includes(author))
    } 
    if (filterGenre.length > 0) {

        TRACKS = TRACKS.filter(({ genre }) => filterGenre.includes(genre))
    }
    if (filterSerchInp.length > 0) {

        TRACKS = TRACKS.filter(({ name }) => name.toLowerCase().includes(filterSerchInp.toLowerCase()))
    }
   
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    if (isLoading) return <h1>Loading</h1>

    return (     
        <Styled.container>
            <Styled.main>
                <Styled.mainNav>
                    <Logo image={isDarkTheme ? "img/logo.png" : "img/logoBlack.png"} />
                    <NavBurger active={menuActive} setActive={setMenuActive} />
                    <NavMenu
                        active={menuActive}
                        setActive={setMenuActive}
                        onToggle={onToggle}
                        darkTheme={darkTheme}   
                        lightTheme={lightTheme}
                        isDarkTheme={isDarkTheme}
                        iconHelfMoon="../img/icon/sprite.svg#icon-helfMoon"
                        iconSun="../img/icon/sprite.svg#icon-sun"                                          
                    />
                </Styled.mainNav>
                <Styled.mainCenterblock>
                    <Styled.centerblockSearch>
                        <Styled.searchSvg>
                            <use xlinkHref={isDarkTheme ? "img/icon/sprite.svg#icon-search" : "img/icon/sprite.svg#icon-searchBlack"}></use>
                        </Styled.searchSvg>
                        <Styled.searchText
                        onInput={(event) => {
                            const target = event.target.value
                            dispatch(setFilterInp({
                                serchInp: target,            
                            }));            
                        }}
                            type="search"
                            placeholder="Поиск"
                            name="search"
                        />
                    </Styled.centerblockSearch>
                    <Styled.centerblockH2>Треки</Styled.centerblockH2>
                    <CenterblockFilter traks={TRACKS} />
                    <Styled.centerblockContent>
                        <Styled.contentTitle>
                            <Styled.col01>Трек</Styled.col01>
                            <Styled.col02>ИСПОЛНИТЕЛЬ</Styled.col02>
                            <Styled.col03>АЛЬБОМ</Styled.col03>
                            <Styled.col04>
                                <Styled.playlistTitleSvg alt="time">
                                    <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                </Styled.playlistTitleSvg>
                            </Styled.col04>
                        </Styled.contentTitle>
                        <Styled.contentPlaylist>
                            {TRACKS.length === 0 ? '' : 
                            TRACKS.map((track) => (
                                <PlayListItem key={track.id} track={track} loading={isLoad} titleTrack={track.name} titleSpan={track.titleSpan} author={track.author}
                                    album={track.album}
                                    time={track.duration_in_seconds}                                    
                                />
                            ))}
                        </Styled.contentPlaylist>
                    </Styled.centerblockContent>
                </Styled.mainCenterblock>
                <Styled.mainSidebar>
                    <Styled.sidebarPersonal>
                        <Styled.sidebarPersonalName>                           
                        </Styled.sidebarPersonalName>
                        <Styled.sidebarAvatar>
                        <use xlinkHref= {isDarkTheme ? "img/icon/sprite.svg#icon-exit" : "img/icon/sprite.svg#icon-exitBlack"}></use>
                        </Styled.sidebarAvatar>
                    </Styled.sidebarPersonal>
                    <Styled.sidebarBlock>
                        <Styled.sidebarList>
                            <SideBar loading={isLoad} users={SELECTIONS} />
                        </Styled.sidebarList>
                    </Styled.sidebarBlock>
                </Styled.mainSidebar>
            </Styled.main>
            <Styled.bar>
                {id ? 
                <BarContent
                  loading={isLoad} 
                  iconPrev="img/icon/sprite.svg#icon-prev"
                  iconPlay="img/icon/sprite.svg#icon-play"
                  iconPause="img/icon/sprite.svg#icon-pause"
                  iconNext="img/icon/sprite.svg#icon-next"
                  iconRepeat="img/icon/sprite.svg#icon-repeat"
                  iconShuffle="img/icon/sprite.svg#icon-shuffle"
                  iconNotef="img/icon/sprite.svg#icon-note"
                  iconLike="img/icon/sprite.svg#icon-like"
                  iconDislike="img/icon/sprite.svg#icon-dislike"
                  iconVolume="img/icon/sprite.svg#icon-volume"
                  tracks = {TRACKS}                 
                  /> : ''}
            </Styled.bar>
            <Styled.footer></Styled.footer>
        </Styled.container>       
    );
};
