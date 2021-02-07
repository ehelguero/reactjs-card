import React from 'react';

export default class MovementEvents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mousePositionX: 0,
            mousePositionY: 0,
            windowScrollY: 0 
        };
    }

    handleOnMouseMove = (e) => {
        this.setState(
            {
                mousePositionX: e.nativeEvent.offsetX,
                mousePositionY: e.nativeEvent.offsetY
            }
        )
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = (e) => {
        this.setState({
            windowScrollY: window.scrollY
        })
    }

    render() {
        return (
            <>
               <section className="movement-container">
                   <div onMouseOver={this.handleOnMouseMove}>
                       <h3>Mouse Position:</h3>
                       <p>x: {this.state.mousePositionX}</p>
                       <p>y: {this.state.mousePositionY}</p>
                   </div>
               </section>
               <section className="movement-container">
                   <div>
                       <h3>Window scroll Position:</h3>
                       <p>y: {this.state.windowScrollY}</p>
                   </div>
               </section> 
            </>
        )
    }
}