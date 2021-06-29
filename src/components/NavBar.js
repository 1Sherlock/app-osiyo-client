/**
 * Created by Sherlock on 10.06.2021.
 */

import React, { useState } from 'react';

const NavBar = (props) => {
    const{scroll, count, setScroll} = props;
    const [open,setOpen] = useState(false);
    const [lang, setLang] = useState("RU")
    const openDropdown = (e) => {
        setOpen(!open)
    }

    return (
        <div className="navbar d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <a href="#" onClick={() => setScroll(0)}><img src={`/icons/logo${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? '-white' : ''}.svg`} alt="" className="logo"/></a>
                {scroll <= -1920 ? <div className="live"><span />LIVE</div> : ""}
            </div>
            <div>
                <ul className="d-flex align-items-center">
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(2)}>Об объекте</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(5)}>Локация</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(8)}>Магазины</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(12)}>Администрация и поддержка</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(14)}>Сервис</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(16)}>Контакты</a></li>
                    <li className={`langDropdown align-items-center`} >
                      <p onClick={openDropdown} className={`activeLang font-montserrat-medium d-flex align-items-center ${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`}>{lang}</p>
                      <div className={`dropdown ${open ? "active" : ""}`}>
                          <p className="dropdonText font-montserrat-medium" onClick={() => {setLang('ENG'); setOpen(false)}}>ENG</p>
                          <p className="dropdonText font-montserrat-medium" onClick={() => {setLang('RU'); setOpen(false)}}>RU</p>
                          <p className="dropdonText font-montserrat-medium" onClick={() => {setLang('UZ'); setOpen(false)}}>UZ</p>
                      </div>
                    </li>

                    <li className="">
                        <a href="tel:0698" className={`d-flex align-items-center font-montserrat-bold ${(scroll <= 0 && scroll >= -count * 1.5) || (scroll <= -count * 5.9 && scroll >= -count * 6.5) || (scroll <= -count * 8.9 && scroll >= - count * 9.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`}>
                            <span className="icon icon-phone" />
                            0698
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default NavBar;