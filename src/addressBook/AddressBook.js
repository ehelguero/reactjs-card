import React, { Component } from "react";
import Card from './AddressCard';

class AddressBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            contacts: [
                {
                    name: 'Pepe',
                    initials: "PP",
                    favorite: true,
                    phone: '666-666-666',
                    email: 'e@e.com'
                },
                {
                    name: 'Carlos',
                    initials: "CR",
                    favorite: false,
                    phone: '555-666-666',
                    email: 'c@c.com'
                },
                {
                    name: 'Rodrigo',
                    initials: "RR",
                    favorite: false,
                    phone: '666-666-666',
                    email: 'e@e.com'
                }
            ]
        }
    }

    handleToogleFavorite = (contactIndex) => {
        // copy the state into new object
        const newContactsState = [...this.state.contacts];
        newContactsState[contactIndex] = {
            ...newContactsState[contactIndex],
            favorite: !newContactsState[contactIndex].favorite
        }

        this.setState({
            contacts: newContactsState
        });
    }

    render () {
        const {contacts} = this.state;

        return (
            <>
                <h3>Address Book</h3>
                { !contacts.length && <p>No contacts!</p>}

                {contacts.map((contact, index) => {
                    return (
                        <Card 
                            key={index}
                            index={index}
                            contact={contact}
                            handleToogleFavorite={this.handleToogleFavorite}
                        />    
                    )
                })}
            </>
        )
    }
}

export default AddressBook;