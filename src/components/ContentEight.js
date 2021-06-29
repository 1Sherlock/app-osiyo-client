/**
 * Created by Sherlock on 11.06.2021.
 */

import React from 'react';

const ContentEight = () => {
    return (
        <div className="content-eight">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8484.73465971004!2d69.38897374285757!3d41.24776817560767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae592f2b723f73%3A0x40e6d0c115a1967c!2z0JDQk9Cd0JrQoQ!5e0!3m2!1sru!2s!4v1623373683990!5m2!1sru!2s"
                width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" />
            <div className="content-eight-info animate-text">
                Если Вас волнует то, как станут добираться будущие клиенты <br/>
                до пункта назначения, можете быть спокойны: в ближайшее <br/> время будет запущен общественный транспорт <br/>
                и обустроены автобусные остановки.
            </div>
            <div className="gen-plan font-mazzard-bold animate-text animate-text-3">
                ПОСМОТРЕТЬ ГЕНПЛАН
            </div>
        </div>
    );
};

export default ContentEight;