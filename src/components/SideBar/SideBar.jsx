import * as Styled from './Styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SideBar = (props) => {
    return (
        <Styled.sidebarItem>
            {props.loading ? (
                <Skeleton height={150} />
            ) : (
                <Styled.sidebarLink href="#">
                    <Styled.sidebarImg src={props.image} alt="day's playlist" />
                </Styled.sidebarLink>
            )}
        </Styled.sidebarItem>
    );
};
