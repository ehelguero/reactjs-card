import React from 'react';

const Card = (props) => {
    const {
        contact,
        index
    } = props;

    const activeClass = contact.favorite ? 'active':'noactive';

    return (
        <>
            <section className="card-container" key={index}>
                <header className="card-header">
                    <span initials={contact.initials}></span>
                    <h2>{contact.name}</h2>
                    <div 
                        className={`favorite ${activeClass}`}
                        onClick={() => { props.handleToogleFavorite(index)}}
                    >
                        *
                    </div>
                </header>
                <main>
                    <ul>
                        <li>Phone: {contact.phone ? contact.phone : ''}</li>
                        <li>Email: {contact.email ? contact.email : ''}</li>
                    </ul>
                </main>
            </section>
        </>
    )
}

export default Card;