import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <div className="flex flex-row h-12 align-center">
                <a href="#"><img src="images/logo.svg"></img></a>
                <ul className="flex flex-row justify-between w-1/3 my-auto">
                    <li><a href="#">Обзор рейсов</a></li>
                    <li><a href="#">Управление рейсов</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
