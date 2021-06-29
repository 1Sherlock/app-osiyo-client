/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const ContentFourth = (props) => {
    return (
        <div className="content-fourth d-flex">
            <div className="content-fourth-left">
                <span className="animate-text">01</span>

                <h4 className="font-mazzard-semi-bold animate-text animate-text-1">Здесь зарождается <br/>
                    торговля</h4>

                <p className="animate-text animate-text-3">
                    На территории объекта будут расположены кафе, рестораны и другие точки общепита, обеспечивающие клиентам <br/><br/>

                    Возможность подкрепить свои силы для дальнейшего времяпровождения в центре оптовой торговли «Osiyo»
                    </p>

            </div>
            <div className="content-fourth-right">
                <div className="img-wrap">
                    <div className="img">
                        <img src="/images/fourth-img.png" style={{transform: `translateX(${props.scrollWidth/150}%)`}} alt=""/>
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

export default ContentFourth;