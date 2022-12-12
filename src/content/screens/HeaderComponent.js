import React from 'react';

const HeaderComponent = () => {
    return (
        <div>
            <div className="flex flex-row h-24 align-center">
                <a href="#"><img src="images/logo.svg"></img></a>
                <ul className="flex flex-row justify-between w-1/4 my-auto">
                    <li><a href="#">Обзор рейсов</a></li>
                    <li><a href="#">Управление рейсов</a></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;
