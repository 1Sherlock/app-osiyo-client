/**
 * Created by Sherlock on 29.06.2021.
 */

import React from 'react';

const NewNavbar = () => {
    return (
        <div className="new-navbar d-flex justify-content-between">
            <a href="#">
                <img src="/newimages/logo.svg" alt="logo.svg" className="logo"/>
            </a>
            <div className="menus">
                <ul>
                    <li><a href="#">Локация</a></li>
                    <li><a href="#">Об объекте</a></li>
                    <li><a href="#">Магазины</a></li>
                    <li><a href="#">Сервис</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <a href="tel:0698" className="d-flex align-items-center phone">
                <span className="icon icon-phone"/> 0698
            </a>
        </div>
    );
};

export default NewNavbar;