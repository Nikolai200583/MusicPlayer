import * as Styled from './Styles';

export const NavBurger = ({ active, setActive }) => {
    return (
        <Styled.navBurger onClick={() => setActive(!active)}>
            <Styled.burgerLine></Styled.burgerLine>
            <Styled.burgerLine></Styled.burgerLine>
            <Styled.burgerLine></Styled.burgerLine>
        </Styled.navBurger>
    );
};
