import * as Styled from './Styles';

export const Logo = (props) => {
    return (
        <Styled.NavLogo>
            <Styled.LogoImage src={props.image}  alt="logo"/>
        </Styled.NavLogo>
    );
};
