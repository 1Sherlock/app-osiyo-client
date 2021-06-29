/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentFourTeen = (props) => {
    return (
        <div className="content-fourth d-flex">
            <div className="content-fourth-left">
                <span className="animate-text">01</span>

                <h4 className="font-mazzard-semi-bold animate-text animate-text-2">Услуги и сервис</h4>

                <p className="animate-text animate-text-4">
                    Не будем забывать об экологии.
                    На территории центра оптовой торговли «OSIYO» будет посажено 960 деревьев и кустарников, среди которых павлония, липа, береза, каштан, ель, рябина и сирийские розы.
<br/><br/>
                    Значительную роль сыграет большой фонтан с хорошо продуманными ландшафтами. Не сомневайтесь, такой вид впечатлит каждого.
                </p>

            </div>
            <div className="content-fourth-right">
                <div className="img-wrap">
                   <div className="img">
                       <img src="/images/improvement-img.png"  style={{transform: `translateX(${props.scrollWidth/150 + 183}%)`}} alt=""/>
                   </div>
                </div>
                {/*<div className="next-btn">*/}
                {/*    <img src="/icons/chevron-left-black.svg" alt=""/>*/}
                {/*    <p>далее</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ContentFourTeen;