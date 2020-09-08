import React, { Component, Fragment } from "react";
import "./style.css";
import Clock from "./Clock";
import dateFormat from "dateformat";
import delete3 from "../images/delete3.png";
import edit7 from "../images/edit7.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProjects, deleteProject } from "../actions/projects";

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: ""
    };
  }

  static propTypes = {
    projects: PropTypes.array.isRequired,
    getProjects: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { history } = this.props;
    return (
      <Fragment>
        <div className="App">
          <h1 className="heading">Projects Running</h1>
          {this.props.projects.map(project => (
            <div key={project.id}>
              <div className="overallcontainer">
                <div id="project">
                  <h3 className="heading">
                    Project Name: {project.projectname}
                  </h3>
                  <div className="butt">
                    <button
                      onClick={this.props.deleteProject.bind(this, project.id)}
                    >
                      <img src={delete3} alt={"delete"} />
                    </button>
                    <button
                      onClick={() =>
                        history.push(`/editproject/${project.id}/`)
                      }
                    >
                      <img src={edit7} alt={"edit"} />
                    </button>
                  </div>
                </div>
                <div className="projects">
                  {project.rapend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>RAP Consultant</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.rapstart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.rapend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.rapend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.pdpend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>PDP Houses Consultant</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.pdpstart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.pdpend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.pdpend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.resettleend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>Resettlement Houses Contractor</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.resettlestart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.resettleend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.resettleend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.supervisionend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>Supervision Consultant</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.supervisionstart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.supervisionend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.supervisionend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.epcend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>EPC</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.epcstart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.epcend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.epcend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.performend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>Performance Guarantee</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.performstart, "fullDate")}
                            </p>
                            <p>
                              <strong>End date:</strong>
                              {dateFormat(project.performend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.performend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.advanceend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>Advance Payment Guarantee</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.advancestart, "fullDate")}
                            </p>
                            <p>
                              <strong>End Date:</strong>
                              {dateFormat(project.advanceend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.advanceend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {project.insureend !== "" ? (
                    <div className="project">
                      <div className="details">
                        <div id="contracts">
                          <h5>
                            <b>Insurance</b>
                          </h5>
                          <div>
                            <p>
                              <strong>Start Date:</strong>
                              {dateFormat(project.insurestart, "fullDate")}
                            </p>
                            <p>
                              <strong>End Date:</strong>
                              {dateFormat(project.insureend, "fullDate")}
                            </p>
                            <div>
                              <strong>Time Left:</strong>
                              <Clock deadline={project.insureend} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    width: "92.5%",
                    backgroundColor: "#fff",
                    marginLeft: 10
                  }}
                >
                  <h5>
                    <strong>Comment:</strong>
                    {project.comment}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps, { getProjects, deleteProject })(
  DisplayData
);
