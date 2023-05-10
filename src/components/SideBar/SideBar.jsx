import * as Styled from './Styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';

export const SideBar = (props) => {
    return (
        <ul>
            {props.users.map((user) => (
                <Styled.sidebarItem key={user.id}>
                    {props.loading ? (
                        <Skeleton height={150} />
                    ) : (
                        <Link
                            to={`/selections/${user.id}`}
                            className="UserList__name"
                        >
                            <img src={user.image} />
                        </Link>
                    )}
                </Styled.sidebarItem>
            ))}
        </ul>
    );
};
