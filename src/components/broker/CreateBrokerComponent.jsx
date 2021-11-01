import React, { Component } from "react";
import BrokerService from "../../services/BrokerService";

class CreateBrokerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      BrokerService.getBrokerById(this.state.id).then((res) => {
        let broker = res.data;
        this.setState({
          firstName: broker.firstName,
          lastName: broker.lastName,
          email: broker.email,
          mobileNumber: broker.mobileNumber,
        });
      });
    }
  }
  saveOrUpdateBroker = (e) => {
    e.preventDefault();
    let broker = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      mobileNumber: this.state.mobileNumber,
    };
    console.log("broker => " + JSON.stringify(broker));

    if (this.state.id === "_add") {
      BrokerService.createBroker(broker).then((res) => {
        this.props.history.push("/brokers");
      });
    } else {
      BrokerService.updateBroker(broker, this.state.id).then((res) => {
        this.props.history.push("/brokers");
      });
    }
  };
  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };
  changeMobileNumberHandler = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };
  cancel() {
    this.props.history.push("/brokers");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Broker</h3>;
    } else {
      return <h3 className="text-center">Update Broker</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> FirstName: </label>
                    <input
                      placeholder="FirstName"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="LastName"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      placeholder="0.0"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Mobile Number: </label>
                    <input
                      placeholder="mobileNumber"
                      name="mobileNumber"
                      className="form-control"
                      value={this.state.mobileNumber}
                      onChange={this.changeMobileNumberHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateBroker}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateBrokerComponent;
