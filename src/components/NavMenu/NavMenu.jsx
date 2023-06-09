import { ThemeProvider } from 'styled-components';
import * as Styled from './Styles';

export const NavMenu = ({ active, setActive, onToggle, lightTheme, darkTheme, isDarkTheme, iconHelfMoon, iconSun}) => {
    const items = [
        { value: 'Главная', to: '/' },
        { value: 'Мой плейлист', to: '/MyTrack' },
        { value: 'Выйти', to: '/Login' },
    ];


    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Styled.navMenuActiv
            className={active ? 'active' : 'navMenu'}
            onClick={() => setActive(false)}
        >
            <Styled.menuList onClick={e => e.stopPropagation()}>
                {items.map((item, i) => (
                    <Styled.menuItem key={i}>
                        <Styled.menuLink to={item.to}>
                            {item.value}
                        </Styled.menuLink>
                    </Styled.menuItem>
                ))}
                  <Styled.themeSvg onClick={onToggle}>
                    <use xlinkHref= {isDarkTheme ? iconHelfMoon : iconSun}></use>
                </Styled.themeSvg>
            </Styled.menuList>           
        </Styled.navMenuActiv>
        </ThemeProvider>
    );
};
