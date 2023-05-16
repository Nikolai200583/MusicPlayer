import * as Styled from './Styles';

export const NavMenu = ({ active, setActive}) => {
    const items = [
        { value: 'Главная', href: 'http://' },
        { value: 'Мой плейлист', href: 'http://' },
        { value: 'Войти', href: 'http://' },
    ];
    return (
        <Styled.navMenuActiv
            className={active ? 'active' : 'navMenu'}
            onClick={() => setActive(false)}
        >
            <Styled.menuList>
                {items.map((item, i) => (
                    <Styled.menuItem key={i}>
                        <Styled.menuLink href={item.href}>
                            {item.value}
                        </Styled.menuLink>
                    </Styled.menuItem>
                ))}
                 
            </Styled.menuList>
            <Styled.themeSvg>
                    <use xlinkHref="img/icon/sprite.svg#icon-helfMoon"></use>
                </Styled.themeSvg>
        </Styled.navMenuActiv>
    );
};
