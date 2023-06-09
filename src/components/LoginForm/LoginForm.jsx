import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as Styled from './Styles';
import { Logo } from '../Logo/Logo';
import { usePostTokenMutation, usePostLoginMutation } from '../../redux/musicApi';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/slices/userSlice';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    const [postToken, {}] = usePostTokenMutation();
    const [postLogin, {}] = usePostLoginMutation();

    const handleLogin = async () => { 
        await postToken({email, password}).unwrap() 
        .then ((token) => {        
            localStorage.setItem('token', token.refresh)
        postLogin({ email, password })
        .then((user) => {
            localStorage.setItem('user', user.data.id)
            dispatch(userLogin({
            email: user.data.email,
            id: user.data.id,
            token: token.access
        }));
    })
    navigate('/')
})}  
    function handleRegistration() {
        navigate('/registration');
    }

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                <Logo image="img/logoBlack.png" />
                <Styled.LoginInput type="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" />
                <Styled.PasswordInput type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"/>
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
