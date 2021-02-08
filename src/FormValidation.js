import React, {Component} from "react";

export default class FormValidation extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            feedback: '',
            acceptedTerms: false,
            submitted: 0,
            validationErrors: {}
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
            this.setState((state) => {
                return {
                    submitted: state.submitted + 1
                } 
            })
        }
    }

    validateFields = () => {
        const {
            firstName,
            feedback,
            acceptedTerms
        } = this.state;

        const errors = {};

        if (!firstName){
            errors['firstName'] = 'First Name cannot be empty';
        }
        if (!feedback){
            errors['feedback'] = 'Feedback cannot be empty';
        }
        if (!acceptedTerms){
            errors['acceptedTerms'] = 'Please accept the terms!';
        }

        this.setState({
            validationErrors: errors
        })

        return Object.keys(errors).length === 0;
    }

    render() {
        return (
            <>
                <section className="form-container">
                    <h3>Form Submit Events:</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <label><span className="error">{this.state.validationErrors.firstName}</span>
                            <input type="text" onChange={this.handleOnChange} value={this.state.firstName} placeholder="First Name" name="firstName"/>
                        </label>
                        <label><span className="error">{this.state.validationErrors.feedback}</span>
                        <input type="text" onChange={this.handleOnChange} value={this.state.feedback} placeholder="Feedback" name="feedback"/>
                        </label>
                        <label><span className="error">{this.state.validationErrors.acceptedTerms}</span>
                        <input type="checkbox"  onChange={this.handleOnChange} name="acceptedTerms"/>
                        </label>
                        <button type="submit">Submit</button>
                        <p>Submitted {this.state.submitted} times!</p>
                    </form>
                </section>
            </>
        )
    }
}