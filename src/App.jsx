
import * as Styled from './components/App/Styles';
import { PlayListItem } from './components/PlayListItems/PlayListItem';
import { Logo } from './components/Logo/Logo';
import { NavBurger } from './components/NavBurger/NavBurger';
import { NavMenu } from './components/NavMenu/NavMenu';
import { SideBar } from './components/SideBar/SideBar';
import { BarContent } from './components/BarContent/BarContent';
import { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { CenterblockFilter } from './components/CenterblockFilter/CenterblockFilter';
import { GlobalStyle } from './components/App/GlobalStyle';
export function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const tracks = [
        {
            titleTrack: 'Guilt',
            titleSpan: '',
            author: 'Nero',
            album: 'Welcome Reality',
            time: '4:44',
        },
        {
            titleTrack: 'Elektro',
            titleSpan: '',
            author: 'Dynoro, Outwork, Mr. Gee',
            album: 'Elektro',
            time: '2:22',
        },
        {
            titleTrack: 'I’m Fire',
            titleSpan: '',
            author: 'Ali Bakgor',
            album: 'I’m Fire',
            time: '2:22',
        },
        {
            titleTrack: 'Non Stop',
            titleSpan: '(Remix)',
            author: 'Стоункат, Psychopath',
            album: 'Non Stop',
            time: '4:12',
        },
        {
            titleTrack: 'Run Run',
            titleSpan: '',
            author: 'Jaded, Will Clarke, AR/CO',
            album: 'Run Run',
            time: '2:54',
        },
        {
            titleTrack: 'Eyes on Fire',
            titleSpan: '(Zeds Dead Remix)',
            author: 'Blue Foundation, Zeds Dead',
            album: 'Eyes on Fire',
            time: '5:20',
        },
        {
            titleTrack: 'Mucho Bien',
            titleSpan: '(Hi Profile Remix)',
            author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
            album: 'Mucho Bien',
            time: '3:41',
        },
        {
            titleTrack: 'Knives n Cherries',
            titleSpan: '',
            author: 'minthaze',
            album: 'Captivating',
            time: '1:48',
        },
        {
            titleTrack: 'How Deep Is Your Love',
            titleSpan: '',
            author: 'Calvin Harris, Disciples',
            album: 'How Deep Is Your Love',
            time: '3:32',
        },
        {
            titleTrack: 'Morena',
            titleSpan: '',
            author: 'Tom Boxer',
            album: 'Soundz Made in Romania',
            time: '3:36',
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    });

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <GlobalStyle />
            <Styled.wrapper>
                <Styled.container>
                    <Styled.main>
                        <Styled.mainNav>                           
                            <Logo />
                            <NavBurger
                                active={menuActive}
                                setActive={setMenuActive}
                            />
                            <NavMenu
                                active={menuActive}
                                setActive={setMenuActive}
                            />
                        </Styled.mainNav>
                        <Styled.mainCenterblock>                            
                            <Styled.centerblockSearch>                                
                                <Styled.searchSvg>
                                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                                </Styled.searchSvg>
                                <Styled.searchText
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                />
                            </Styled.centerblockSearch>
                            <Styled.centerblockH2>Треки</Styled.centerblockH2>
                            <CenterblockFilter traks={tracks} />
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
                                    {tracks.map((track, i) => (
                                        <PlayListItem
                                            key={i}
                                            loading={isLoading}
                                            titleTrack={track.titleTrack}
                                            titleSpan={track.titleSpan}
                                            author={track.author}
                                            album={track.album}
                                            time={track.time}
                                        />
                                    ))}
                                </Styled.contentPlaylist>
                            </Styled.centerblockContent>
                        </Styled.mainCenterblock>
                        <Styled.mainSidebar>
                            <Styled.sidebarPersonal>
                                <Styled.sidebarPersonalName>
                                    Sergey.Ivanov
                                </Styled.sidebarPersonalName>
                                <Styled.sidebarAvatar></Styled.sidebarAvatar>
                            </Styled.sidebarPersonal>
                            <Styled.sidebarBlock>
                                <Styled.sidebarList>
                                    <SideBar
                                        loading={isLoading}
                                        image="img/playlist01.png"
                                    />
                                    <SideBar
                                        loading={isLoading}
                                        image="img/playlist02.png"
                                    />
                                    <SideBar
                                        loading={isLoading}
                                        image="img/playlist03.png"
                                    />
                                </Styled.sidebarList>
                            </Styled.sidebarBlock>
                        </Styled.mainSidebar>
                    </Styled.main>
                    <Styled.bar>
                        <BarContent loading={isLoading} />
                    </Styled.bar>
                    <Styled.footer></Styled.footer>
                </Styled.container>
            </Styled.wrapper>
        </SkeletonTheme>
    );
}