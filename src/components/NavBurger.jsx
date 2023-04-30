const NavBurger = ({ active, setActive }) => {
    return (
        <div className="nav__burger burger" onClick={() => setActive(!active)}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>
    );
};

export default NavBurger;
