import React from "react";
import "./style.css";

class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
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
    return (
      <div className="App">
        <h1>Porjects Running</h1>
        <div className="books">
          <div className="book">
            <div className="details">
              {items.map(item => (
                <div key={item.id}>
                  <h2>{item.consultant}</h2>
                  <h4>{item.project}</h4>
                  <div>
                    <p>Start Date: {item.start}</p>
                    <p>End date: {item.end}</p>
                    <p>Time Left</p>
                    <p>Comment:{item.comment} </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayData;
