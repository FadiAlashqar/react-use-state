import React from 'react'

const Accordion = (props) => {
    const { language } = props
    return (
        <div key={language.id}>
            <button className="btn">{language.title}</button>
            <p>{language.description}</p>
        </div>
    )
}

export default Accordion