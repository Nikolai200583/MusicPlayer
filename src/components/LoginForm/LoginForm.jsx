import { useNavigate } from 'react-router-dom';
import * as Styled from './Styles';
import { Logo } from '../Logo/Logo';

export const LoginForm = ({ setToken }) => {
    const navigate = useNavigate();

    //     const tokenApp = document.cookie.slice(6);
    //    if (tokenApp) {
    //     setToken(tokenApp)
    //    }

    function handleLogin() {
        const token = 'Coocushki';
        document.cookie = `token=${token}`;
        setToken(token);
        navigate('/');
    }

    function handleRegistration() {
        navigate('/registration');
    }

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                <Logo image="img/logoBlack.png" />
                <Styled.LoginInput placeholder="Логин" />
                <Styled.PasswordInput placeholder="Пароль" />
                <Styled.Navigation>
                    <Styled.BtnEnter onClick={handleLogin}>
                        Войти
                    </Styled.BtnEnter>
                    <Styled.BtnRegistration onClick={handleRegistration}>
                        Зарегистрироваться
                    </Styled.BtnRegistration>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};
