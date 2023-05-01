const NavMenu = ({ active, setActive }) => {
    const items = [
        { value: "Главная", href: "http://" },
        { value: "Мой плейлист", href: "http://" },
        { value: "Войти", href: "http://"},
      ];
    return (
        <div className={ active ? "active" : "nav__menu menu" }
        onClick={() => setActive(false)}>

            <ul className="menu__list">
                {items.map((item, i) => (
                    <li className="menu__item"  key={i}>
                    <a href={item.href}className="menu__link">{item.value}</a>              
                </li>
                ))}
            </ul>                 
                        
        </div>
    );
};

export default NavMenu;
