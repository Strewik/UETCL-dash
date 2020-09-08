import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Headers extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3 text-light">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <Link to="/newproject" className="nav-link text-light">
            <strong> Add Project</strong>
          </Link>
        </li>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info
                btn-sm text-light"
          >
            <strong>Logout</strong>
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <div className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="nav-item">
          <Link to="/register" className="nav-link text-light">
            <strong>Register</strong>
          </Link>
        </span>
        <br />
        <span className="nav-item">
          <Link to="/" className="nav-link text-light">
            <strong>Login</strong>
          </Link>
        </span>
      </div>
    );
    return (
      <nav
      className="navbar navbar-expand-sm
            navbar-light"
      >
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Headers);
