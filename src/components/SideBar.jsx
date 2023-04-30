import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const SideBar = (props) => {
      
    return (
        <div className="sidebar__item">
            {props.loading ? (
                            <Skeleton height={150} />
                        ) : (
            <a className="sidebar__link" href="#">
                <img
                    className="sidebar__img"
                    src={props.image}
                    alt="day's playlist"
                />
            </a>
                        )}
        </div>
    );
};
export default SideBar;
