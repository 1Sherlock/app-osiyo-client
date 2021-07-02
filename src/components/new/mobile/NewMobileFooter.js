import React from 'react';
import {Link} from "react-router-dom";

const NewMobileFooter = (props) => {
    return (
        <div className="new-mobile-footer d-flex justify-content-between align-items-center" style={{position: props.position, paddingLeft: props.pl}}>
            <div className="d-flex align-items-center item">
                <div className="new-mobile-footer-left">
                    <img src="/newimages/home-img-2.png" alt="img.png"/>
                    <div className="new-mobile-footer-icon">
                        <span className="icon icon-play"/>
                    </div>
                </div>
                <div>
                    <h4 className="font-gilroy-bold" style={{color: props.color}}>Ход строительства</h4>
                    <span className="font-gilroy-bold">Прямой эфир </span>
                </div>
            </div>

            <div className="new-mobile-footer-arrows d-flex align-items-center">
                <Link to={props.leftLink}>
                    <span className={`icon icon-arrow-left ${props.leftDisabled ? "disabled" : ""}`} />
                </Link>
                <Link to={props.rightLink}>
                    <span className={`icon icon-arrow-right ${props.rightDisabled ? "disabled" : ""}`} />
                </Link>
            </div>
        </div>
    );
};

export default NewMobileFooter;