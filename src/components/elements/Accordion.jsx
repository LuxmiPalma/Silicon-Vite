import React, { useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import { FaqContext } from "../../contexts/FaqContext";

const Accordion = () => {
    const { faqs } = useContext(FaqContext);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle logic
    };

    return (
        <div className="accordion">
            {faqs.map((faq, index) => (
                <AccordionItem
                    key={faq.id}
                    item={faq}
                    isActive={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
