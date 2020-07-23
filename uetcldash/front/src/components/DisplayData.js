import React from "react";
import "./style.css";
import Clock from "./Clock";
import { Button } from "react-bootstrap";
import axios from "axios";
import dateFormat from "dateformat";

import delete3 from "../images/delete3.png";
import edit7 from "../images/edit7.png";

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      deadline: ""
    };
  }
  componentDidMount() {
    fetch("/api/dates/")
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteProject(id) {
    // Issue DELETE request
    axios
      .delete(`http://127.0.0.1:8000/api/dates/${id}/`)
      .then(() => {
        // Issue GET request after item deleted to get updated list
        // that excludes item of id
        return axios.get(`http://127.0.0.1:8000/api/dates/`);
      })
      .then(res => {
        // Update items in state as per-usual
        const items = res.data;
        this.setState({ items });
        console.log(items);
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    const { history } = this.props;
    if (!isLoaded) return <div>Loading...</div>;

    return (
      <div className="App">
        <div className="addButton">
          <Button
            style={{
              flex: "right",
              padding: 10,
              borderRadius: 10,
              width: "15%",
              backgroundColor: "#fff",
              fontWeight: "bold",
              fontSize: "20px"
            }}
            onClick={() => history.push("/newproject")}
          >
            Add Project
          </Button>
        </div>
        <h1>Projects Running</h1>
        {items.map(item => (
          <div key={item.id}>
            <div className="overallcontainer">
              <div id="project">
                <h2>Project Name: {item.project}</h2>
                <div className="butt">
                  <button onClick={() => this.deleteProject(item.id)}>
                    <img src={delete3} alt={"delete"} />
                  </button>
                  <button
                    onClick={() => history.push(`/editproject/${item.id}/`)}
                  >
                    <img src={edit7} alt={"edit"} />
                  </button>
                </div>
              </div>
              <div className="projects">
                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>RAP Consultant</h4>
                      <div>
                        <p>
                          <strong>Start Date:</strong>
                          {dateFormat(item.rapstart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.rapend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.rapend} />
                        </div>
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
                          <strong>Start Date:</strong>
                          {dateFormat(item.pdpstart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.pdpend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.pdpend} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Resettlement Houses Contractor</h4>
                      <div>
                        <p>
                          <strong>Start Date:</strong>
                          {dateFormat(item.resettlestart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.resettleend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.resettleend} />
                        </div>
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
                          <strong>Start Date:</strong>
                          {dateFormat(item.supervisionstart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.supervisionend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.supervisionend} />
                        </div>
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
                          <strong>Start Date:</strong>
                          {dateFormat(item.epcstart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.epcend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.epcend} />
                        </div>
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
                          <strong>Start Date:</strong>
                          {dateFormat(item.performstart, "fullDate")}
                        </p>
                        <p>
                          <strong>End date:</strong>
                          {dateFormat(item.performend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.performend} />
                        </div>
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
                          <strong>Start Date:</strong>
                          {dateFormat(item.advancestart, "fullDate")}
                        </p>
                        <p>
                          <strong>End Date:</strong>
                          {dateFormat(item.advanceend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.advanceend} />
                        </div>
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
                          <strong>Start Date:</strong>{" "}
                          {dateFormat(item.insurestart, "fullDate")}
                        </p>
                        <p>
                          <strong>End Date:</strong>
                          {dateFormat(item.insureend, "fullDate")}
                        </p>
                        <div>
                          <strong>Time Left:</strong>
                          <Clock deadline={item.insureend} />
                        </div>
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
