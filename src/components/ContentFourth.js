/**
 * Created by Sherlock on 10.06.2021.
 */

import React from 'react';

const ContentFourth = () => {
    return (
        <div className="content-fourth d-flex">
            <div className="content-fourth-left">
                <span>01</span>

                <h4 className="font-mazzard-semi-bold">Здесь зарождается <br/>
                    торговля</h4>

                <p>
                    На территории объекта будут расположены кафе, рестораны и другие точки общепита, обеспечивающие клиентам возможность подкрепить свои силы для дальнейшего времяпровождения в центре оптовой торговли «Osiyo»
                </p>

            </div>
            <div className="content-fourth-right">
                <img src="/images/fourth-img.png" alt=""/>
                {/*<div className="next-btn">*/}
                {/*    <img src="/icons/chevron-left-black.svg" alt=""/>*/}
                {/*    <p>далее</p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default ContentFourth;