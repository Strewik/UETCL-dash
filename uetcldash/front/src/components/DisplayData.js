import React from "react";

class App extends React.Component {
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
        <ul>
          {items.map(item => (
            <li key={item.id}>
              Start Date: {item.rapstart} | Enddate: {item.rapend}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
