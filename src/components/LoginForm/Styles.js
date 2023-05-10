import styled from 'styled-components';

export const ContainerLoginForm = styled.div`
    max-width: 1920px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginForms = styled.div`
    width: 366px;
    height: 439px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}
`;
export const LoginInput = styled.input`
    width: 278.5px;
    height: 35px;
    border: none;
    border-bottom: 1px solid rgb(208, 206, 206);
    margin-bottom: 38px;
    padding-bottom: 8px;
    ::placeholder {       
        color: #E1E1E1;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
    }
}
`;
export const PasswordInput = styled.input`
width: 278.5px;
height: 35px;
border: none;
border-bottom: 1px solid #D0CECE;;
margin-bottom: 60px;
padding-bottom: 8px;
::placeholder {       
    color: #E1E1E1;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
}
}

`;
export const BtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background: #580ea2;
    border-radius: 6px;
    margin-bottom: 20px;   
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
`;
export const BtnRegistration = styled.button`
    width: 278px;
    height: 52px;
    border: 1px solid #d0cece;
    background: #ffffff;
    border-radius: 6px;
    margin-bottom: 47px;   
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
`;
 export const Navigation = styled.nav`
 display: flex;
 flex-direction: column;
 `;