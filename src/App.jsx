import './style.css';
import PlayListItem from './components/PlayListItems/PlayListItem';
import { Logo } from './components/Logo/Logo';
import { NavBurger } from './components/NavBurger/NavBurger';
import NavMenu from './components/NavMenu/NavMenu';
import { SideBar } from './components/SideBar/SideBar';
import { BarContent } from './components/BarContent/BarContent';
import { useState, useEffect } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import CenterblockFilter from './components/CenterblockFilter/CenterblockFilter';

function App() {
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
            <div className="wrapper">
                <div className="container">
                    <main className="main">
                        <nav className="main__nav nav">
                            <Logo />
                            <NavBurger
                                active={menuActive}
                                setActive={setMenuActive}
                            />
                            <NavMenu
                                active={menuActive}
                                setActive={setMenuActive}
                            />
                        </nav>
                        <div className="main__centerblock centerblock">
                            <div className="centerblock__search search">
                                <svg className="search__svg">
                                    <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
                                </svg>
                                <input
                                    className="search__text"
                                    type="search"
                                    placeholder="Поиск"
                                    name="search"
                                />
                            </div>
                            <h2 className="centerblock__h2">Треки</h2>
                            <CenterblockFilter traks={tracks} />
                            <div className="centerblock__content">
                                <div className="content__title playlist-title">
                                    <div className="playlist-title__col col01">
                                        Трек
                                    </div>
                                    <div className="playlist-title__col col02">
                                        ИСПОЛНИТЕЛЬ
                                    </div>
                                    <div className="playlist-title__col col03">
                                        АЛЬБОМ
                                    </div>
                                    <div className="playlist-title__col col04">
                                        <svg
                                            className="playlist-title__svg"
                                            alt="time"
                                        >
                                            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div className="content__playlist playlist">
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
                                </div>
                            </div>
                        </div>
                        <div className="main__sidebar sidebar">
                            <div className="sidebar__personal">
                                <p className="sidebar__personal-name">
                                    Sergey.Ivanov
                                </p>
                                <div className="sidebar__avatar"></div>
                            </div>
                            <div className="sidebar__block">
                                <div className="sidebar__list">
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
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="bar">
                        <BarContent loading={isLoading} />
                    </div>
                    <footer className="footer"></footer>
                </div>
            </div>
        </SkeletonTheme>
    );
}

export default App;
