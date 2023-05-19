import { ThemeProvider } from 'styled-components';
import * as Styled from './Styles';

export const NavMenu = ({ active, setActive, onToggle, lightTheme, darkTheme, isDarkTheme, iconHelfMoon, iconSun}) => {
    const items = [
        { value: 'Главная', href: 'http://' },
        { value: 'Мой плейлист', href: 'http://' },
        { value: 'Войти', href: 'http://' },
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
                        <Styled.menuLink href={item.href}>
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
