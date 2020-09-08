import React, {Component, Fragment} from "react";
import "./style.css";
import Clock from "./Clock";
// import axios from "axios";
import dateFormat from "dateformat";

import delete3 from "../images/delete3.png";
import edit7 from "../images/edit7.png";
import add from "../images/add.png";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProjects, deleteProject } from "../actions/projects";

class DisplayData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      isLoaded: false,
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
    // fetch("/api/dates/")
    //   .then(res => res.json())
    //   .then(json => {
    //     this.setState({
    //       items: json,
    //       isLoaded: true
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // deleteProject(id) {
  //   axios
  //     .delete(`/api/dates/${id}/`)
  //     .then(() => {
  //       return axios.get(`/api/dates/`);
  //     })
  //     .then(res => {
  //       const items = res.data;
  //       this.setState({ items });
  //       console.log(items);
  //     });
  // }

  render() {
    // const { isLoaded, items } = this.state;
    const { isLoaded } = this.state;
    const { history } = this.props;
    if (!isLoaded) return <div>Loading...</div>;

    return (
      <Fragment>
        <div className="App">
          <div className="butt">
            <button onClick={() => history.push("/newproject")}>
              <img src={add} alt={"Add"} />
            </button>
          </div>
          <h1>Projects Running</h1>
          {/* {items.map(item => ( */}
          {this.props.projects.map(project => (
            <div key={project.id}>
              <div className="overallcontainer">
                <div id="project">
                  <h2>Project Name: {project.projectname}</h2>
                  <div className="butt">
                    {/* <button onClick={() => this.deleteProject(project.id)}>
                      <img src={delete3} alt={"delete"} />
                    </button> */}
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
                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>RAP Consultant</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>PDP Houses Consultant</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>Resettlement Houses Contractor</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>Supervision Consultant</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>EPC</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>Performance Guarantee</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>Advance Payment Guarantee</h4>
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

                  <div className="project">
                    <div className="details">
                      <div id="contracts">
                        <h4>Insurance</h4>
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
                </div>

                <div>
                  <p>
                    <strong>Comment:</strong>
                    {project.comment}
                  </p>
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
