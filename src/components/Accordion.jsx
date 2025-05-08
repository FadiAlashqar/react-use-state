import React, { useState } from 'react'

const Accordion = (props) => {
    const { language } = props
    const [isOpen, SetIsOpen] = useState(false);
    return (
        <div>
            <button className="btn" onClick={() => SetIsOpen(!isOpen)}>{language.title}</button>
            {isOpen && <p>{language.description}</p>}
        </div>
    )
}

export default Accordion