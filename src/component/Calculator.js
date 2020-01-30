import React from "react";
import "../css/Calculator.css";
import { Row, Col, Button } from "react-bootstrap";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: 0
        };
    }
    render() {
        const { img, alt, title, text } = this.props;
        return (
            <div className="calculate">
                <div className="display">
                    <h1 className="sum"> {this.state.sum}</h1>
                </div>
                <div className="number-group ">
                    <Button className="button operation" variant="outline-info">
                        +
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        -
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        x
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        ÷
                    </Button>
                    <Button className="button" variant="outline-info">
                        7
                    </Button>
                    <Button className="button" variant="outline-info">
                        8
                    </Button>
                    <Button className="button" variant="outline-info">
                        9
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        %
                    </Button>
                    <Button className="button" variant="outline-info">
                        4
                    </Button>
                    <Button className="button" variant="outline-info">
                        5
                    </Button>
                    <Button className="button" variant="outline-info">
                        6
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        C
                    </Button>
                    <Button className="button" variant="outline-info">
                        1
                    </Button>
                    <Button className="button" variant="outline-info">
                        2
                    </Button>
                    <Button className="button" variant="outline-info">
                        3
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        {"<="}
                    </Button>
                    <Button className="button" variant="outline-info">
                        
                    </Button>
                    <Button className="button" variant="outline-info">
                        0
                    </Button>
                    <Button className="button" variant="outline-info">
                        .
                    </Button>
                    <Button className="button operation" variant="outline-info">
                        =
                    </Button>
                </div>
            </div>
        );
    }
}

export default Calculator;
