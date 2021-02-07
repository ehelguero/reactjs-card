import React from 'react';

class InputEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mouseDown: false,
            mouseClicked: 0,
            inputText: 'Hello World',
            formInputText: 'Hello World 2'
        };
    }

    onClick = () => {
        this.setState((state) => {
            return { mouseClicked: state.mouseClicked + 1 }
        });
    }

    onMouseUp = () => {
        this.setState({ mouseDown: false })
    }

    onMouseDown = () => {
        this.setState({ mouseDown: true })
    }

    onChange = (e) => {
        console.log(e.target);
        this.setState({ inputText: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ formInputTextSubmitted: this.state.formInputText });
    }
    
    render() {
        return (
            <>
                <section className="events-container">
                    <h3>Mouse Events</h3>
                    <button 
                        onClick={this.onClick} 
                        onMouseDown={this.onMouseDown}
                        onMouseUp={this.onMouseUp}
                    >Click me</button>
                    <p>Button mouse down: {this.state.mouseDown ? 'true' : 'false'}</p>
                    <p>Button clicked: {this.state.mouseClicked}</p>
                </section>

                <section className="events-container">
                    <h3>Input change events</h3>
                    <input onChange={this.onChange} type="text"
                    value={this.state.inputText} />
                    <p>Input value: {this.state.inputText}</p>
                </section>

                <section className="events-container">
                    <h3>Form Submit events</h3>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.formInputText} />
                        <button type="submit">Submit</button>
                        <p>Input value: {this.state.formInputText}</p>
                        <p>Submitted value: {this.state.formInputTextSubmitted}</p>
                    </form>
                </section>
            </>
        ); 
    }
}

export default InputEvents;