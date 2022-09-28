import SlideToggle from 'react-slide-toggle';

import React from 'react';

function Card(props) {
    const { title, expanded = false, adClass, iconClass } = props;

    function preventUrl(e) {
        e.preventDefault();
    }

    return (
        <SlideToggle collapsed={expanded ? false : true} >
            {({ onToggle, setCollapsibleElement, toggleState }) => (
                <div className={`card ${adClass}`}>
                    <div className={`text-white card-header ${toggleState.toLowerCase()}`} onClick={onToggle} >
                        <a href="#card" className={`toggle-button text-white ${toggleState.toLowerCase()}`} onClick={(e) => preventUrl(e)}>
                            {
                                iconClass ?
                                    <i className={iconClass}></i> : ""
                            }
                            {title ?
                                title : ""
                            }
                        </a>
                    </div>

                    <div ref={setCollapsibleElement}>
                        <div className="card-body">
                            {props.children}
                        </div>
                    </div>
                </div>
            )}
        </SlideToggle >
    )
}

export default React.memo(Card);