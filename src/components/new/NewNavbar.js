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
            <ul className="menus">
                <li><a href="#" className="font-gilroy-bold">Локация</a></li>
                <li><a href="#" className="font-gilroy-bold">Об объекте</a></li>
                <li><a href="#" className="font-gilroy-bold">Магазины</a></li>
                <li><a href="#" className="font-gilroy-bold">Сервис</a></li>
                <li><a href="#" className="font-gilroy-bold">Контакты</a></li>
            </ul>
            <a href="tel:0698" className="d-flex align-items-center phone font-gilroy-extra-bold">
                <span className="icon icon-phone"/> 0698
            </a>
        </div>
    );
};

export default NewNavbar;