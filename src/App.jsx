    // App.jsx
import React, { Component } from 'react';
import Clock from './Clock.jsx'
import './style.css';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {


        // SetUp the constructor to make the app Reactive
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 25, 2017',
            newDeadline: ""
        }
    }


        // Function "like" that overwrites "deadline" with the text in newDeadline that we got from the Input-Text-Box.
    changeDeadLine(){
        this.setState({deadline: this.state.newDeadline});
    }


        // This is the HTML that will be disply to user.
    render(){
        return (
            <div className="App">

            <div className="C-Title">Count-Down to: {this.state.deadline}</div>

            <Clock deadline={this.state.deadline} />

            <Form inline>
                <FormControl onChange={event => this.setState({newDeadline: event.target.value})} type="text" className="inp-sty" placeholder="New Date"/>
                <br/>
                <Button onClick={() => this.changeDeadLine()}>Submmit New Date</Button>
            </Form>

            </div>
        )
    }
}


export default App;
