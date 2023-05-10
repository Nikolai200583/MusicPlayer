import { NavLink } from 'react-router-dom';
import * as Styled from './Styles';
import { Logo } from '../Logo/Logo';

export const LoginForm = ({setToken}) => {

    function handleLogin() {       
        const token = "Coocushki";
        document.cookie = `token=${token}`;
        setToken(token)
    }

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                <Logo image="img/logoBlack.png" />
                <Styled.LoginInput placeholder="Логин" />
                <Styled.PasswordInput placeholder="Пароль" />
                <Styled.Navigation>
                    <Styled.BtnEnter onClick={handleLogin}>
                        <NavLink to="/"> Войти </NavLink>
                    </Styled.BtnEnter>
                     <Styled.BtnRegistration>                   
                        <NavLink to="/registration"> Зарегистрироваться </NavLink>
                    </Styled.BtnRegistration>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};
