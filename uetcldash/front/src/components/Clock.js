import React, { Component } from "react";
import "../App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  leading0(num) {
    return num < 10 ? "0" + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 31);
    const months = Math.floor((time / (1000 * 60 * 60 * 24 * 31)) % 12);
    const years = Math.floor((time / (1000 * 60 * 60 * 24 * 31 * 12)) % 365);

    this.setState({ years, months, days, hours, minutes, seconds });
  }

  render() {
    let timeStatus = {
      color: "blue"
    };

    if (this.state.months < 1) {
      timeStatus = {
        color: "red"
      };
    } else if (this.state.months < 3) {
      timeStatus = {
        color: "orange"
      };
    } else {
      timeStatus = {
        color: "green"
      };
    }

    if (this.state.days <= 0) {
      return <div style={timeStatus}> EXPIRED </div>;
    } else {
      return (
        <div>
          <div className="Clock-years" style={timeStatus}>
            {this.leading0(this.state.years)} years{" "}
            {this.leading0(this.state.months)} months{" "}
            {this.leading0(this.state.days)} days
          </div>
        </div>
      );
    }
  }
}

export default Clock;
