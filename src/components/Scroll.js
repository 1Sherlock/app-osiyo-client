/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const Scroll = (props) => {
    const {scroll, count} = props;
    return (
        <div className="position-relative">
            <div className={`scroll ${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`}>
                <div style={{width: ((0-scroll * 100 / (count * 16)) + "%") }} className={`scroll-bar ${(scroll <= 0 && scroll >= -count/2) || (scroll <= -count * 1.9 && scroll >= -count * 2.5) || (scroll <= -count * 4.9 && scroll >= -count * 5.5) || (scroll <= -count * 7.9 && scroll >= - count * 8.5) || (scroll <= -count * 11.9 && scroll >= -count * 12.5) || (scroll <= -count * 13.9 && scroll >= -count * 14.5) ? 'theme' : ''}`} />
                <p>{(scroll <= 0 && scroll >= -count / 2 ? <><span className="icon icon-mouse"/> скролл</> : (scroll <= -count / 2 && scroll >= -count * 1.5) ? "пути" : (scroll <= -count * 1.5 && scroll >= -count * 4.5) ? "о проекте" : (scroll <= -count * 4.5 && scroll >= -count * 7.5) ? "локация" : (scroll <= -count * 7.5 && scroll >= -count * 11.5) ? "магазины" : (scroll <= -count * 11.5 && scroll >= -count * 13.5) ? "благоустройство" : (scroll <= -count * 13.5 && scroll >= -count * 15.5) ? "сервис" : (scroll <= -count * 15.5 && scroll >= -count * 16.5) ? "контакты" : ""    )}</p>
            </div>

        </div>
    );
};

export default Scroll;