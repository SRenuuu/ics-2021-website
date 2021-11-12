import React, {useContext} from "react";
import {Accordion, AccordionContext, Card, useAccordionButton} from "react-bootstrap";

const FaqComponent = ({question, collapseId, answer}) => {

    const ContextAwareToggle = ({children, eventKey, callback}) => {
        const {activeEventKey} = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );
        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                className={"ud-faq-btn " + (isCurrentEventKey ? "" : "collapse")}
                onClick={decoratedOnClick}
            >
                {children}
            </button>
        );
    }

    return (
        <Card className="ud-single-faq" data-aos="fade-up">
            <Card.Header className="accordion m-0 p-0">
                <ContextAwareToggle eventKey={collapseId}>
                        <span className="icon flex-shrink-0">
                            <i className="bi bi-chevron-down m-auto"/>
                        </span>
                    <span className="q-title">{question}</span>
                </ContextAwareToggle>
            </Card.Header>

            <Accordion.Collapse eventKey={collapseId} id={collapseId} className="accordion-collapse">
                <Card.Body className="ud-faq-body">{answer}</Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

export default FaqComponent;
