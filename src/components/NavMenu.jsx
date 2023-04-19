const NavMenu = ({ first, second, third }) => {
    return (
        <div className="nav__menu menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        {first}
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        {second}
                    </a>
                </li>
                <li className="menu__item">
                    <a href="http://" className="menu__link">
                        {third}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
