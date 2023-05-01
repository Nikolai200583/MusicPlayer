
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PlayListItem = ({ titleTrack, titleSpan, author, album, time, loading }) => {    
    
    return (
        <div className="playlist__item">
            <div className="playlist__track track">
                <div className="track__title">
                    <div className="track__title-image">
                        {loading ? (
                            <Skeleton width={51} height={51} />
                        ) : (
                            <svg className="track__title-svg" alt="music">
                                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                            </svg>
                        )}
                    </div>

                    <div className="track__title-text">
                        {loading ? (
                            <Skeleton width={330} />
                        ) : (
                            <a className="track__title-link" href="http://">
                                {titleTrack}
                                <span className="track__title-span">
                                    {titleSpan}
                                </span>
                            </a>
                        )}
                    </div>
                </div>

                <div className="track__author">
                    {loading ? (
                        <Skeleton width={270} />
                    ) : (
                        <a className="track__author-link" href="http://">
                            {author}
                        </a>
                    )}
                </div>

                <div className="track__album">
                    {loading ? (
                        <Skeleton width={317} />
                    ) : (
                        <a className="track__album-link" href="http://">
                            {album}
                        </a>
                    )}
                </div>

                <div className="track__time">
                    <svg className="track__time-svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className="track__time-text">{time}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayListItem;
