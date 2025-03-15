import React from "react";

const AccordionItem = ({ item, isActive, onClick }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isActive ? "" : "collapsed"}`}
                    type="button"
                    onClick={onClick}
                    aria-expanded={isActive}
                >
                    {item.title}
                </button>
            </h2>
            
            <div className={`accordion-collapse ${isActive ? "show" : "collapse"}`}>
                <div className="accordion-body">{item.content}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
