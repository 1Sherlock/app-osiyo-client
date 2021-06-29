/**
 * Created by Sherlock on 29.06.2021.
 */

import React from 'react';

const NewNavbar = () => {
    return (
        <div className="new-navbar d-flex justify-content-between">
            <div>
                <img src="/newimages/logo.svg" alt="logo.svg" className="logo"/>
            </div>
            <div className="menus">
                <ul>
                    <li><a href="#">Локация</a></li>
                    <li><a href="#">Об объекте</a></li>
                    <li><a href="#">Магазины</a></li>
                    <li><a href="#">Сервис</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
        </div>
    );
};

export default NewNavbar;