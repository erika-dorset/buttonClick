import React from 'react';
import ReactDOM from 'react-dom';

class ClickButton extends React.Component {
    constructor() {
        super();
        this.state = {
            clickNum: 0
        };
        //Bind to make `this` work in the onclick callback
        //used when the function needs to be called later in certain events when it's useful
        this.handleClicks = this.handleClicks.bind(this);
    }
    handleClicks() {
        // Another way of modifying the state 
        // this.setState({
        // 	clicked: this.state.clicked + 1
        // });

        //as setState is async, this is the correct way
        //Asynchronous code takes statements outside of the main program flow, 
        //allowing the code after the asynchronous call to be executed immediately without waiting.
        this.setState(prevState => ({
            clickNum: prevState.clickNum + 1
        }));

    }
    //Access state date and setup the onClick event handler
    render() {
        return (
            <div>
                <h1>The button is clicked {this.state.clickNum} times.</h1>
                <button type="button" onClick={this.handleClicks}>Click</button>
            </div>
        );
    }
}

//Draw the component
ReactDOM.render(
    <ClickButton />,
    document.getElementById('root')
);