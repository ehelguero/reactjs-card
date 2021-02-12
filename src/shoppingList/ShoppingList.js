import React, { Component } from "react";

export default class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            newItemList: '',
            groceryItems: [
                {
                    name: 'Bananas', id: 'item-1', completed: false
                },
                {
                    name: 'Piña', id: 'item-2', completed: true
                },
                {
                    name: 'Pizza', id: 'item-3', completed: false
                }
            ],
            validationErrors: 0,
            submitted: 0
        };
    }

    handleOnChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = (
            target.type === 'text'
            ? target.value
            : target.checked
        )

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        const isFormValid = this.validateFields();
        if(isFormValid){
            const newGroceryItemObject = {
                name: this.state.newItemList, completed: false, id: `item-${Date.now()}`
            }
            this.setState((state) => {
                return {
                    submitted: state.submitted + 1,
                    groceryItems: [...state.groceryItems, newGroceryItemObject],
                    newItemList: ''
                } 
            })
        }
    }

    handleOnDelete = (e) => {
        const target = e.target;
        const itemindexValue = target.attributes.itemindex.value;
        const index = parseInt(itemindexValue, 10);

        console.log('toggling: ' + index);
        const newGroceryItemState = [...this.state.groceryItems];
        newGroceryItemState.splice(index, 1);
        this.setState({
            groceryItems: newGroceryItemState
        });
    }

    handleOnCompletedToggle = (e) => {
        const target = e.target;
        const itemindexValue = target.attributes.itemindex.value;
        const index = parseInt(itemindexValue, 10);

        console.log('toggling: ' + index);

        const newGroceryItemState = [...this.state.groceryItems];
        newGroceryItemState[index] = {
            ...newGroceryItemState[index],
            completed: target.checked
        };
        this.setState({
            groceryItems: newGroceryItemState
        });
    }

    validateFields = () => {
        const {
            newItemList
        } = this.state;

        const errors = {};

        if (!newItemList){
            errors['newItemList'] = 'New Item cannot be empty';
        }

        this.setState({
            validationErrors: errors
        })

        return Object.keys(errors).length === 0;
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
        const prevStateString = JSON.stringify(prevState.groceryItems);
        const actualStateString = JSON.stringify(this.state.groceryItems);

        if(prevStateString !== actualStateString){
            console.log("Save state to Local Storage");
            localStorage.setItem('groceryItems', actualStateString);
        }
    }

    componentDidMount(){
        const groceryItemLocalStorage = localStorage.getItem('groceryItems');
        if(groceryItemLocalStorage){
            this.setState({
                groceryItems: JSON.parse(groceryItemLocalStorage)
            });
        }
    }

    render() {

        const {groceryItems} = this.state;
        console.log(groceryItems);
        return (
            <>
                <section className="form-container">
                    <h3>Shopping List:</h3>
                    { !groceryItems.length && <p>No items!</p>}
                    <ul>
                        {groceryItems.map((item,index) => {
                            return (
                                <li key={item.id}>
                                    <input
                                    type="checkbox"
                                    checked={item.completed}
                                    onChange={this.handleOnCompletedToggle}
                                    itemIndex={index}
                                    />
                                    <span>{item.name}</span>
                                    <button itemindex={index} onClick={this.handleOnDelete}>X</button>
                                </li>
                            )
                        })}
                    </ul>
                    <form onSubmit={this.handleOnSubmit}>
                        <label><span className="error">{this.state.validationErrors.newItemList}</span>
                            <input type="text" onChange={this.handleOnChange} value={this.state.newItemList} placeholder="New Item" name="newItemList"/>
                        </label>
                        <button type="submit">Submit</button>
                        <p>Submitted {this.state.submitted} times!</p>
                    </form>
                </section>
            </>
        )
    }
}