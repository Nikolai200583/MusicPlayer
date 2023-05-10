
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const Login = ({setToken}) => {     
    return (
      <div>
        <LoginForm setToken = {setToken}/>     
      </div>
    );
  }