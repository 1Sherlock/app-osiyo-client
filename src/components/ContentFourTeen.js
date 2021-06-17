/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentFourTeen = () => {
    return (
        <div className="content-fourth d-flex">
            <div className="content-fourth-left">
                <span>01</span>

                <h4 className="font-mazzard-semi-bold">Путь экологии</h4>

                <p>Не будем забывать об экологии.
                    На территории центра оптовой торговли «OSIYO» будет посажено 960 деревьев и кустарников, среди которых павлония, липа, береза, каштан, ель, рябина и сирийские розы. Значительную роль сыграет большой фонтан с хорошо продуманными ландшафтами.
                    Не сомневайтесь, такой вид впечатлит каждого.</p>

            </div>
            <div className="content-fourth-right">
                <img src="/images/improvement-img.png" alt=""/>
                {/*<div className="next-btn">*/}
                {/*    <img src="/icons/chevron-left-black.svg" alt=""/>*/}
                {/*    <p>далее</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ContentFourTeen;