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
      deadline: ""
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/dates/")
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
  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) return <div>Loading...</div>;

    const { history } = this.props;
    return (
      <div className="App">
        {/* <TouchableOpacity
              style={styles.TouchableOpacityStyle}
              onPress={() => navigation.navigate("Advance Form")}
            >
              <Text style={styles.TouchableOpacityAdd}>+ Add</Text>
            </TouchableOpacity> */}
        {/* <button onClick={() => this.addEmptyItem()}>Add</button> */}

        <Button
          // variant="btn btn-success"
          onClick={() => history.push("/newproject")}
        >
          Add Project
        </Button>
        <h1>Projects Running</h1>

        {items.map(item => (
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
                        <p>Start Date: {item.rapstart}</p>
                        <p>End date: {item.rapend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.rapend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>PDP Houses Consultant</h4>
                      <div>
                        <p>Start Date: {item.pdpstart}</p>
                        <p>End date: {item.pdpend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.pdpend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Resettlement Houses Consultant</h4>
                      <div>
                        <p>Start Date: {item.resettlestart}</p>
                        <p>End date: {item.resettleend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.resettleend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Supervision Consultant</h4>
                      <div>
                        <p>Start Date: {item.supervisionstart}</p>
                        <p>End date: {item.supervisionend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.supervisionend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>EPC</h4>
                      <div>
                        <p>Start Date: {item.epcstart}</p>
                        <p>End date: {item.epcend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.epcend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Performance Guarantee</h4>
                      <div>
                        <p>Start Date: {item.performstart}</p>
                        <p>End date: {item.performend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.performend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Advance Payment Guarantee</h4>
                      <div>
                        <p>Start Date: {item.advancestart}</p>
                        <p>End date: {item.advanceend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.advanceend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>

                <div className="project">
                  <div className="details">
                    <div id="contracts">
                      <h4>Insurance</h4>
                      <div>
                        <p>Start Date: {item.insurestart}</p>
                        <p>End date: {item.insureend}</p>
                        <div>
                          Time Left:
                          <Clock deadline={item.insureend} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button>Delete</button>
                  <button>Update</button>
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
