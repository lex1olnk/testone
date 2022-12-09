const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="navBar">
                    <a href="#"><img src="images/logo.svg"></img></a>
                    <ul className="navBar_ul">
                        <li><a href="#">Обзор рейсов</a></li>
                        <li><a href="#">Управление рейсов</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent;
