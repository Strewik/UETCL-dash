import React from "react";
import "./style.css";
import Clock from "./Clock";
import { Button } from "react-bootstrap";

class DisplayData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            deadline: "",
        };
    }
    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/dates/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    isLoaded: true,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) return <div>Loading...</div>;
        return (
            <div className="App">
                <h1>Projects Running</h1>

                {items.map((item) => (
                    <div key={item.id}>
                        <div className="overallcontainer">
                            <div id="project">
                                <h2>Project Name: {item.project}</h2>
                            </div>
                            <div className="projects">
                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>RAP Consultant</h4>
                                            <div>
                                                <p>
                                                    Start Date: {item.rapstart}
                                                </p>
                                                <p>End date: {item.rapend}</p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={item.rapend}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>PDP Houses Consultant</h4>
                                            <div>
                                                <p>
                                                    Start Date: {item.pdpstart}
                                                </p>
                                                <p>End date: {item.pdpend}</p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={item.pdpend}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>
                                                Resettlement Houses Consultant
                                            </h4>
                                            <div>
                                                <p>
                                                    Start Date:{" "}
                                                    {item.resettlestart}
                                                </p>
                                                <p>
                                                    End date: {item.resettleend}
                                                </p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={
                                                            item.resettleend
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>Supervision Consultant</h4>
                                            <div>
                                                <p>
                                                    Start Date:{" "}
                                                    {item.supervisionstart}
                                                </p>
                                                <p>
                                                    End date:{" "}
                                                    {item.supervisionend}
                                                </p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={
                                                            item.supervisionend
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>EPC</h4>
                                            <div>
                                                <p>
                                                    Start Date: {item.epcstart}
                                                </p>
                                                <p>End date: {item.epcend}</p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={item.epcend}
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>Performance Guarantee</h4>
                                            <div>
                                                <p>
                                                    Start Date:{" "}
                                                    {item.performstart}
                                                </p>
                                                <p>
                                                    End date: {item.performend}
                                                </p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={
                                                            item.performend
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>Advance Payment Guarantee</h4>
                                            <div>
                                                <p>
                                                    Start Date:{" "}
                                                    {item.advancestart}
                                                </p>
                                                <p>
                                                    End date: {item.advanceend}
                                                </p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={
                                                            item.advanceend
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="project">
                                    <div className="details">
                                        <div id="contracts">
                                            <h4>Insurance</h4>
                                            <div>
                                                <p>
                                                    Start Date:{" "}
                                                    {item.insurestart}
                                                </p>
                                                <p>
                                                    End date: {item.insureend}
                                                </p>
                                                <p>
                                                    Time Left:
                                                    <Clock
                                                        deadline={
                                                            item.insureend
                                                        }
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <strong>Comment:</strong>
                                    {item.comment}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default DisplayData;
