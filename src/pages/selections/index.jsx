import { useParams, useNavigate } from 'react-router-dom';
import { SELECTION } from '../../Constants/selection';

export const Selections = () => {
    const params = useParams();
    const navigate = useNavigate();

    const user = SELECTION.find((user) => user.id === Number(params.id));

    const handleBackButtonClick = () => {
        navigate('/', { replace: true });
    };

    return (
        <section>
            {/* <img src={user.avatar} alt={fullName} /> */}
            <h1>{user.id}</h1>
            {/* <p>email: {user.email}</p> */}
            {/* <p>gender: {user.gender}</p> */}
            <button onClick={handleBackButtonClick}> Back to main</button>
        </section>
    );
};
