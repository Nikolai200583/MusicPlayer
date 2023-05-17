import * as Styled from '../../components/App/Styles';
import { ThemeProvider } from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PlayListItem } from '../../components/PlayListItems/PlayListItem';
import { Logo } from '../../components/Logo/Logo';
import { NavBurger } from '../../components/NavBurger/NavBurger';
import { NavMenu } from '../../components/NavMenu/NavMenu';
import { BarContent } from '../../components/BarContent/BarContent';
import { SELECTION } from '../../Constants/selection';

export const Selections = () => {
    const [theme, setTheme] = useState('dark');
    const isDarkTheme = theme === 'dark';
    const params = useParams();
    const [menuActive, setMenuActive] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const [isToggled, setIsToggled] = useState(isDarkTheme);
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate('/', { replace: true });
    };

    const playlist = SELECTION.find((user) => user.id === Number(params.id));

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    };
    const onToggle = () => {
        setIsToggled(!isToggled);
        toggleTheme();
    };
    const darkTheme = {
        body: '#181818',
        title: '#fff',
        backImageTrack: '#313131',
        border: '1px solid #ffffff',
        spanBurger: '#D3D3D3',
        barLine: '#2E2E2E',
    };

    const lightTheme = {
        body: '#fff',
        title: 'black',
        backImageTrack: '#F6F4F4',
        border: '1px solid #000000',
        spanBurger: '#000000',
        barBack: '#F5F5F5',
        barLine: '#D9D9D9',
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    });

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Styled.container>
                <Styled.main>
                    <Styled.mainNav>
                        <Logo
                            image={
                                isDarkTheme
                                    ? '../img/logo.png'
                                    : '../img/logoBlack.png'
                            }
                        />
                        <NavBurger
                            active={menuActive}
                            setActive={setMenuActive}
                        />
                        <NavMenu
                            active={menuActive}
                            setActive={setMenuActive}
                            onToggle={onToggle}
                            darkTheme={darkTheme}
                            lightTheme={lightTheme}
                            isDarkTheme={isDarkTheme}
                        />
                    </Styled.mainNav>
                    <Styled.mainCenterblock>
                        <Styled.centerblockSearch>
                            <Styled.searchSvg>
                                <use
                                    xlinkHref={
                                        isDarkTheme
                                            ? '../img/icon/sprite.svg#icon-search'
                                            : '../img/icon/sprite.svg#icon-searchBlack'
                                    }
                                ></use>
                            </Styled.searchSvg>
                            <Styled.searchText
                                type="search"
                                placeholder="Поиск"
                                name="search"
                            />
                        </Styled.centerblockSearch>
                        <Styled.centerblockH2>
                            {playlist.class}
                        </Styled.centerblockH2>
                        <Styled.centerblockContent>
                            <Styled.contentTitle>
                                <Styled.col01>Трек</Styled.col01>
                                <Styled.col02>ИСПОЛНИТЕЛЬ</Styled.col02>
                                <Styled.col03>АЛЬБОМ</Styled.col03>
                                <Styled.col04>
                                    <Styled.playlistTitleSvg alt="time">
                                        <use xlinkHref="../img/icon/sprite.svg#icon-watch"></use>
                                    </Styled.playlistTitleSvg>
                                </Styled.col04>
                            </Styled.contentTitle>
                            <Styled.contentPlaylist>
                                {playlist.items.map((track, i) => (
                                    <PlayListItem
                                        key={i}
                                        loading={isLoading}
                                        titleTrack={track.name}
                                        author={track.author}
                                        album={track.album}
                                        time={track.duration_in_seconds}
                                    />
                                ))}
                            </Styled.contentPlaylist>
                        </Styled.centerblockContent>
                    </Styled.mainCenterblock>
                    <Styled.mainSidebar>
                        <Styled.sidebarPersonal>
                            <Styled.sidebarExit
                                onClick={handleBackButtonClick}
                            />
                        </Styled.sidebarPersonal>
                    </Styled.mainSidebar>
                </Styled.main>
                <Styled.bar>
                    <BarContent
                        loading={isLoading}
                        iconPrev="../img/icon/sprite.svg#icon-prev"
                        iconPlay="../img/icon/sprite.svg#icon-play"
                        iconPause="../img/icon/sprite.svg#icon-pause"
                        iconNext="../img/icon/sprite.svg#icon-next"
                        iconRepeat="../img/icon/sprite.svg#icon-repeat"
                        iconShuffle="../img/icon/sprite.svg#icon-shuffle"
                        iconNotef="../img/icon/sprite.svg#icon-note"
                        iconLike="../img/icon/sprite.svg#icon-like"
                        iconDislike="../img/icon/sprite.svg#icon-dislike"
                        iconVolume="../img/icon/sprite.svg#icon-volume"
                    />
                </Styled.bar>
                <Styled.footer></Styled.footer>
            </Styled.container>
        </ThemeProvider>
    );
};
