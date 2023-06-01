import { useNavigate } from 'react-router-dom';
import * as Styled from './Styles';
import { Logo } from '../Logo/Logo';
import { useState } from 'react';
import { usePostRegMutation} from '../../redux/musicApi';
export const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passRep, setPassRep] = useState('');
    const navigate = useNavigate();


    const [postReg, {isSuccess, isError, isLoading}] = usePostRegMutation()

    const handleClickReg = async () => {
        if(pass !== passRep){
            alert('Пароль не совпадает')           
            return
        }
            await postReg({
            "email": email,
            "password": pass,
            "username": email,
        }).unwrap()
        
    
} 
if (isError) return <h1>Ошибка данных</h1>
if (isSuccess) navigate('/login');
if (isLoading) return <h1>Запрос улетел</h1>

    return (
        <Styled.ContainerLoginForm>
            <Styled.LoginForms>
                <Logo image="img/logoBlack.png" />
                <Styled.LoginInput 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" />
                <Styled.PasswordInput
                type="password"
                onChange={(e) => setPass(e.target.value)}
                placeholder="Пароль" />
                <Styled.PasswordInputRep 
                type="password"
                onChange={(e) => setPassRep(e.target.value)}
                placeholder="Повторите Пароль" />
                <Styled.Navigation>
                    <Styled.BtnRegistration onClick={handleClickReg}>                        
                            Зарегистрироваться                        
                    </Styled.BtnRegistration>
                </Styled.Navigation>
            </Styled.LoginForms>
        </Styled.ContainerLoginForm>
    );
};
