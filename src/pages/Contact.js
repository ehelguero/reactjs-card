import React from "react";

const Contact = ({match}) => {
    const who = match.params.userId || 'page';
    return (
        <h2>Contact {who}</h2>
    )
}

export default Contact;