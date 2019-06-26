import React from 'react';
import { Button, Row, Container, Col } from 'react-bootstrap';

class TimerComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            startTime: 0,
            showButton: false,
            savedTime: 0
        }

    }

    startTimer = () => {
        this.setState({
            startTime: Date.now() - this.state.currentTime,
            currentTime: this.state.currentTime,
            showButton: true
        })
        console.log("Start timer");
        this.timer = setInterval(() => this.setState({
            currentTime: Date.now() - this.state.startTime
        }), 1)
    }



    stopTimer = () => {
        let savedTimes = []
        clearInterval(this.timer);
        this.setState({
            savedTime: Date(this.state.currentTime).toString()
        })

        // for (var i = 0; i < 5; i++) {
        //     savedTimes.push(<p key={i}>{this.state.savedTime}</p>)
        // }



    }

    pauseTimer() {

    }

    resetTimer = () => {
        this.setState({
            currentTime: 0
        })
    }


    render() {



        return (
            <Container>
                <Row>

                    <Col><p>Displaying the current time here:</p>
                        <div>{Date(this.state.currentTime).toString()}</div></Col>
                    <Col>

                        <Button variant="success" onClick={this.startTimer} >Start</Button></Col>
                    <Col> <Button variant="danger" onClick={this.stopTimer} disabled={!this.state.showButton}>Stop</Button></Col>
                    <Col><Button variant="warning" onClick={this.pauseTimer} disabled={!this.state.showButton}>Pause</Button></Col>
                    <Col> <Button variant="info" onClick={this.resetTimer}>Reset</Button></Col>
                </Row>

                <Row>

                </Row>

            </Container>
        )
    }
}

export default TimerComponent;