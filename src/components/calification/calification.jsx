// dependencies
import React from 'react';
// styles
import './style.scss';

function Calification(props) {
    return (
        <div className="calification-content">
            {
                [1, 2, 3, 4, 5].map(i =>
                    <span
                        key={i}
                        className={`fa fa-star fa-3x ${props.calification >= i && "active"}`}
                        onClick={() => props.changeCalification(i)}
                    ></span>
                )
            }
        </div>
    );
}

export default Calification;
