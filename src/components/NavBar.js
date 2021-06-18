/**
 * Created by Sherlock on 10.06.2021.
 */

import React, { useState } from 'react';

const NavBar = (props) => {
    const{scroll, count, setScroll} = props;
    const [open,setOpen] = useState(false)
    const openDropdown = (e) => {
        setOpen(!open)
        if (e.target.matches(".dropdonText")) {
            document.querySelector(".activeLang").textContent = e.target.textContent
        }
    }
    return (
        <div className="navbar d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <a href="#" onClick={() => setScroll(0)}><img src={`/icons/logo${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? '-white' : ''}.svg`} alt="" className="logo"/></a>
                {scroll <= -1920 ? <div className="live"><span />LIVE</div> : ""}
            </div>
            <div>
                <ul className="d-flex align-items-center">
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(2)}>О компании</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(5)}>Локация</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(8)}>Магазины</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(12)}>Благоустройство</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(14)}>Сервис</a></li>
                    <li><a href="#" className={`${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} onClick={() => setScroll(16)}>Контакты</a></li>
                    <li className={`langDropdown `} onClick={openDropdown}>
                      <p className={`activeLang font-montserrat-medium ${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`}>RU</p>
                      <div className={`dropdown ${open ? "active" : ""}`}>
                          <p className="dropdonText font-montserrat-medium">ENG</p> 
                          <p className="dropdonText font-montserrat-medium">RU</p> 
                          <p className="dropdonText font-montserrat-medium">UZ</p> 
                      </div>  
                    </li>

                    <li className="">
                        <a href="tel:0698" className={`d-flex align-items-center font-montserrat-bold ${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`}>
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