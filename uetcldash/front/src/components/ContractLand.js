import React from "react";
import "./style.css";

class ContractLand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/project/")
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
    return (
      <div className="App">
        <h1>Contracts Running</h1>
        {items.map(item => (
          <div key={item.id}>
            <div className="projects">
              <div className="project">
              <h3>Project: {item.project}</h3>
                <h2>{item.consultant}</h2>
                <div className="details">
                  <p>
                    <strong>Start Date:</strong> {item.start}
                  </p>
                  <p>
                    <strong>End date:</strong> {item.end}
                  </p>
                  <p>
                    <strong>Time Left:</strong>
                  </p>
                  <p>
                    <strong>Comment:</strong> {item.comment}
                  </p>
                </div>
                <div>
                  <button>Delete</button>
                  <button>Update</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ContractLand;
