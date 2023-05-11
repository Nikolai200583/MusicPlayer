import { NavLink } from 'react-router-dom';
import * as Styled from './Styles';
import { Logo } from '../Logo/Logo';

export const RegistrationForm = () => {
    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                <Logo image="img/logoBlack.png" />
                <Styled.LoginInput placeholder="Логин" />
                <Styled.PasswordInput placeholder="Пароль" />
                <Styled.PasswordInputRep placeholder="Повторите Пароль" />
                <Styled.Navigation>
                    <Styled.BtnRegistration>
                        <NavLink to="/registration">
                            {' '}
                            Зарегистрироваться{' '}
                        </NavLink>
                    </Styled.BtnRegistration>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};
