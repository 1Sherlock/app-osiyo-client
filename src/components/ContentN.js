/**
 * Created by Sherlock on 24.06.2021.
 */

import React from 'react';

const ContentN = (props) => {
    return (
        <div className="content-n content-ten justify-content-between">
            <div className="content-ten-left d-flex ">
                <div className="d-flex dates">
                    <div>
                        <h4 className='animate-text'>2020</h4>
                        <h4 className='animate-text active'>2021</h4>
                        <h4 className='animate-text'>2022</h4>
                    </div>
                    <div>
                        <h6 className="animate-text">декабрь</h6>
                        <h6 className="animate-text active">январь</h6>
                        <h6 className="animate-text">апрель</h6>
                        <h6 className="animate-text">июнь</h6>
                        <h6 className="animate-text">июль</h6>
                        <h6 className="animate-text">август</h6>
                    </div>
                </div>
                <div className="line" />
            </div>
            <div className="content-ten-right d-flex justify-content-between">
                <div>
                    <span className="animate-text">15 апреля 2021</span>
                    <h4 className="font-mazzard-semi-bold animate-text animate-text-1">Этап катлована</h4>
                    <p className="animate-text animate-text-2">Благодаря своим впечатляющим размерам, <br/>
                        на территории центра располагается большое <br/> количество объектов, создающих условия <br/>
                        для будущих владельцев помещений, <br/>
                        арендаторов и клиентов. <br/><br/>

                        Кроме того, «OSIYO» может вместить более 400.000 человек одновременно.</p>
                </div>
                <div className="img-wrap">
                   <div className="img">
                       <img src="/images/n-img.png" style={{transform: `translateX(${props.scrollWidth/150 + 36}%)`}} alt=""/>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ContentN;